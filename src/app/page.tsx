import { Container } from '@/components/container'
import { Form } from '@/components/form';
import { Board } from '@/components/board';

export default function Home() {
  return (
    <main>
      <Container>
        <section className='mt-12'>
          <h1 className='font-bold text-2xl'>O que você vai estudar hoje?</h1>
          <Form />
        </section>

        <section className='mt-12 mb-12'>
          <h2 className='font-bold text-xl'>Confira as últimas matérias que você estudou:</h2>
          <Board />
        </section>
      </Container>
    </main>
  );
}