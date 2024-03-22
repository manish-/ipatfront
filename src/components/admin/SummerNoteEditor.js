import React, { Fragment, useState, useEffect } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import * as $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
import * as UTILS_ACTIONS from '../../actions/admin/utilsActions';

const SummerNoteEditor = (props) => {
  let uniqueEditor;
  const dispatch = useDispatch();
  const [lastInsertedImages, setLastInsertedImages] = useState(null);

  const { processing, upload_file, redirectToo, editorId } = useSelector(state => {
    return {
      processing: state.Utils_Reducers.upload_file.processing,
      error: state.Utils_Reducers.upload_file.error,
      errors: state.Utils_Reducers.upload_file.errors,
      message: state.Utils_Reducers.upload_file.message,
      upload_file: state.Utils_Reducers.upload_file.file_url,
      redirectToo: state.Utils_Reducers.upload_file.redirectTo,
      editorId: state.Utils_Reducers.upload_file.editorId
    }
  });

  const onImageUpload = (e, ele) => {
    dispatch(UTILS_ACTIONS.upload_editor_file({ thumbnailFile: e[0], editorId: uniqueEditor.uid }));
  }
  useEffect(() => {
    if (processing === false && upload_file && editorId === uniqueEditor.uid) {
      setLastInsertedImages(upload_file);
      uniqueEditor.insertImage(upload_file);
      dispatch(UTILS_ACTIONS.clear_editor_file());
    }
  }, [upload_file]);
  const [pageContent, setPageContent] = useState('');

  const onContentChange = (e) => {
    if (e != pageContent) {
      setPageContent(e);
      props.onContentChange(e);
    }
  }

  useEffect(() => {
    return () => {
      dispatch(UTILS_ACTIONS.clear_editor_file());
    }
  }, []);
  useEffect(() => {
    setPageContent(props.pageContent);
  }, [props.pageContent])

  // //console.log("uniqueEditor", uniqueEditor);
  return (
    <Fragment>
      <ReactSummernote
        value={pageContent}
        ref={el => uniqueEditor = el}
        options={{
          height: 200,
          dialogsInBody: true,
          dialogsFade: true,
          toolbar: [
            ['style', ['style','bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['table', ['table']],
            ['insert', ['link', 'picture']],
            ['view', ['codeview']]
          ]
        }}
        onInit={(e) => { }}
        onChange={(e) => onContentChange(e)}
        onImageUpload={e => onImageUpload(e)}

      />
    </Fragment>
  )
}

export default SummerNoteEditor;