import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

import Modal from "react-modal";
import ImageUploading from "react-images-uploading";
import "./UploadImg.scss";
import PublishIcon from "@material-ui/icons/Publish";
import CloseIcon from "@material-ui/icons/Close";

import { createPost } from "../redux/actions/postActions";
import { connect } from "react-redux";
import imageToBase64 from "image-to-base64";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    marginTop: "5vh",
    transform: "translate(-50%, -50%)",
    // width: 'clamp(40vw, 500px, 90vw)',
    zIndex: "101",
    // top: "0",
    // position: "absolute",
    // right: "0",
    // bottom: "0",
    // left: "0",
    // margin: "90px auto",
    // height: "50vw"

  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement('#');

function UploadImg({createPost}) {
  let subtitle;
  const [img, setImg] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    // customStyles.content.opacity = 0.1;
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost(images[0].data_url);

    closeModal();
  }

  return (
    <div className="App">
      <Button
        //   onClick={onImageUpload}
        onClick={openModal}
      >
        Upload Image
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // className="modal"
        contentLabel="Example Modal"
      >
        <ImageUploading
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="imageUploading">
              {imageList.length === 0 ? (
                <div className="first">
                  <p>Select an image to upload</p>
                  <Button variant="outlined" onClick={onImageUpload}>
                    Upload Image
                  </Button>
                </div>
              ) : (
                <form>
                  {imageList.map((image, index) => (
                    <div key={index} className="second">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="btns">
                        <TextField variant="outlined" maxRows={1} placeholder="What's on your mind!"/>
                        <div className="btns__flex">
                        <Button  
                        // onClick={() => onImageUpdate(index)}
                        onClick={(e) => handleSubmit(e)
                        }
                        variant="outlined"
                        endIcon={<PublishIcon />}>
                          Upload
                        </Button>
                        <Button onClick={() => onImageRemove(index)}  variant="outlined"
                         endIcon={<CloseIcon />}
                       >
                          Cancel
                        </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </form>
              )}
              {/* <div className="right">
                <Button variant="outlined" onClick={onImageUpload}>Upload Image</Button>
                <Button  variant="outlined" onClick={onImageRemoveAll, closeModal}>Remove</Button>
              </div> */}

              {({ imageList, onImageUpload, onImageRemoveAll, errors }) =>
                errors && (
                  <div style={{ color: "red" }}>
                    {errors.maxNumber && (
                      <span>Number of selected images exceed maxNumber</span>
                    )}
                    {errors.acceptType && (
                      <span>Your selected file type is not allow</span>
                    )}
                    {errors.maxFileSize && (
                      <span>Selected file size exceed maxFileSize</span>
                    )}
                    {errors.resolution && (
                      <span>
                        Selected file is not match your desired resolution
                      </span>
                    )}
                  </div>
                )
              }
            </div>
          )}
        </ImageUploading>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(null, mapDispatchToProps)(UploadImg);
