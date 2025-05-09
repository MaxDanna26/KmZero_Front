import { Container, Title, Text, Section } from './styles'
import React from 'react'
const SobreNosotros = () => {
  return (
    <>
      <Container>
        <Section>
          <Title>🏡 Quiénes somos</Title>
          <Text>
            Somos un equipo joven y defensores de la alimentación sostenible,
            saludable y local en la provincia de Barcelona. Creemos en el poder
            del consumo consciente y queremos ofrecer una alternativa diferente
            al modelo de distribución tradicional: más cercana, más humana y más
            respetuosa con el entorno. <br /> <br />
            Nuestra plataforma nace con la intención de conectar directamente a
            los consumidores de Barcelona con los productores locales de la
            provincia, fomentando el comercio justo, la transparencia y la
            calidad por encima de todo.
          </Text>
        </Section>

        <Section>
          <Title>Nuestra misión</Title>
          <Text>
            Queremos cambiar la forma en que las personas en Barcelona acceden a
            los productos del día a día. Nuestra misión es hacer más fácil y
            accesible consumir productos frescos, naturales y de origen local,
            apoyando al pequeño productor de la provincia y reduciendo el
            impacto ambiental del transporte masivo de alimentos. <br /><br />Cada producto
            que ves en nuestra web ha sido cuidadosamente seleccionado, no solo
            por su calidad, sino por la historia, el esfuerzo y los valores que
            hay detrás.
          </Text>
        </Section>

        <Section>
          <Title>Nuestros valores</Title>
          <Text>
            <b>♻️Sostenibilidad:</b> Trabajamos con productos de temporada de la
            provincia de Barcelona, apostamos por envases reciclables y rutas de
            reparto optimizadas para reducir nuestra huella ambiental. <br />
            <br />
            <b>📍Cercanía:</b> Queremos que conozcas quién está detrás de lo que comes.
            Apostamos por relaciones de confianza entre productores locales de
            Barcelona y consumidores. <br />
            <br />
            <b>🔍 Transparencia:</b> No ocultamos nada. El origen, el precio y el
            proceso de cada producto de nuestra provincia está disponible para
            ti. <br />
            <br />
            <b>💯Calidad:</b> Seleccionamos productos que cumplen con los más
            altos estándares, tanto en sabor como en forma de producción, todos
            ellos provenientes de los mejores productores de la provincia.
          </Text>
        </Section>
      </Container>
    </>
  );
};

export default SobreNosotros;

