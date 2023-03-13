import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

export const Ckediter= ()=>{
  const [addData, setAddData] = useState("");

  const API_URl = "https://noteyard-backend.herokuapp.com";
  const UPLOAD_ENDPOINT = "api/blogs/uploadImg";

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("uploadImg", file);
            fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({ default: `${API_URl}/${res.url}` });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={addData}
        config={{
          extraPlugins: [uploadPlugin],
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setAddData(data);
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
}

