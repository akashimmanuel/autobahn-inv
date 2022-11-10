import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface IProps {
    handleClose: () => void;
    children?: any
    postData: { id: number, title: string, body: string },
    handleFrom: (val: any) => void;
}

const PostForm = ({ handleClose, postData, handleFrom }: IProps) => {
    const { handleSubmit, control } = useForm({ defaultValues: postData });

    const onSubmit = (e: any) => {
        handleFrom(e)
        handleClose()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        fullWidth
                        label="Title"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        sx={{ marginBottom: 2 }}
                    />
                )}
                rules={{ required: 'Title is required' }}
            />


            <Controller
                name="body"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        fullWidth
                        label="Description"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        sx={{ marginBottom: 2 }}
                    />
                )}
                rules={{ required: 'First name required' }}
            />

            <div>
                <Button type="submit" variant="contained" color="primary">
                    sumbit
                </Button>
            </div>
        </form>
    )
}

export default PostForm;
