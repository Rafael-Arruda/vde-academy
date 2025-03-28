import { Container } from '@/components/container'
import { Form } from '@/components/form';

export default function Home() {
  return (
    <main>
      <Container>
        <section className='mt-12'>
          <h1 className='font-bold text-xl'>O que você vai estudar hoje?</h1>

          <Form />
        </section>
      </Container>
    </main>
  );
}