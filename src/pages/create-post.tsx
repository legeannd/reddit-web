import { Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import React from 'react';
import { useRouter } from 'next/router';
import { InputField } from '../components/InputField';
import { useCreatePostMutation } from '../generated/graphql';
import { Layout } from '../components/Layout';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';

const CreatePost: React.FC = () => {
  const [createPost] = useCreatePostMutation();
  const router = useRouter();
  useIsAuth();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async values => {
          const { errors } = await createPost({
            variables: { input: values },
            update: cache => {
              cache.evict({ fieldName: 'posts:{}' });
            },
          });
          if (!errors) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="text..."
                label="Body"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              Create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreatePost);
