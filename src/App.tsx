import { CssBaseline, Grid } from '@mui/material'
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect'
import React, { useState } from 'react'
import CardView from './components/card'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addPostsRequest, deletePostsRequest, fetchPostsRequest, updatePostsRequest } from './redux/actions/postActions/postActions'
import PostForm from './components/form/postForm'
import ModalMUI from './components/modal'
import Navbar from "./components/navbar"



const App: React.FC = () => {

  const dispatch = useDispatch();
  const postData = useSelector(((state: any) => state.posts.posts))
  const [formData, setFormData] = useState({ id: Math.random(), title: "", body: "" })
  const [FormType, setFormType] = useState("EDIT")

  const [post, setPost] = useState<any[]>([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(postData);
  

  useEnhancedEffect(() => {
    dispatch(fetchPostsRequest());
  }, [])

  useEnhancedEffect(() => {
    setPost(postData)
  }, [postData])

  const deletePost = (id: any) => {
    dispatch(deletePostsRequest(id));
  }

  const handleFrom = (data: any) => {
    console.log(data);

    if (FormType === "NEW_POST") {
      dispatch(addPostsRequest(data));
    }else{
      dispatch(updatePostsRequest(data));
    }
  }

  return (
    <div>
      <CssBaseline />
      <ModalMUI open={open} handleClose={handleClose} handleOpen={handleOpen}>
        <PostForm handleClose={handleClose} postData={formData} handleFrom={handleFrom} />
      </ModalMUI>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12} sx={{ position: "absolute", top: 60 }}>
          <Box
            sx={{
              maxWidth: '100%',
              margin: 2
            }}
          >

            <Button variant="contained" sx={{ float: "right", margin: 1 }} onClick={() => {
              setFormData({ id: Math.random(), title: "", body: "" })
              setFormType("NEW_POST")
              handleOpen();
            }}>Add New Post</Button>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {post && post?.map((item: any, i: any) =>
              <Grid item xs={4} sm={4} md={3} key={i} >
                <CardView post={item}
                  setFormData={setFormData} handleOpen={handleOpen}
                  deletePost={deletePost} />
              </Grid>)}
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}

export default App
