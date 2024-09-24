import { Button, Flex, Select, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    repeat_password: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match'),
    role: yup.string().required().oneOf(['admin', 'user'])
})

export default function AddUser() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repeat_password: '',
            role: ''
        },
        validate: yupResolver(schema),
        mode: 'controlled',
        validateInputOnBlur: true
    });

    return (
        <form onSubmit={form.onSubmit((values) => console.log('values :>>', values))}>
            <Flex direction='column' gap='sm'>
            <TextInput label="Name" placeholder="Enter your name" {...form.getInputProps('name')} />
            <TextInput label="Email" placeholder="Enter your email" {...form.getInputProps('email')} />
            <TextInput label="Password" placeholder="Enter your password" {...form.getInputProps('password')} />
            <TextInput label="Confirm Password" placeholder="Confirm your password" {...form.getInputProps('repeat_password')} />
            <Select label="Role" placeholder="Select your role" data={['admin', 'user']} {...form.getInputProps('role')} />
            <Button type="submit">Add User</Button>
            </Flex>
        </form>
    )
}