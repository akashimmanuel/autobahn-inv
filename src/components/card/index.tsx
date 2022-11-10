import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface IProps {
    post: {
        id: string,
        title: string,
        body: string
    };

    setFormData: (e: any) => void;
    handleOpen: () => void;
    deletePost: (id: any) => void;
}

export default function CardView({ post, setFormData, handleOpen, deletePost }: IProps) {

    const edit = () => {
        setFormData({ id: post?.id, title: post?.title, body: post?.body })
        handleOpen()
    }


    return (
        <Card sx={{ maxWidth: 345, minHeight: 245, margin: 1 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {post?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post?.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => edit()} >
                    Edit
                </Button>
                <Button size="small" color="error" onClick={() => deletePost(post?.id)} >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}