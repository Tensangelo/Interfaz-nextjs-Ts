// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const idCharacters = async (request: NextApiRequest, response: NextApiResponse) => {

    const id = request.query.id;

    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json());

    response.status(200).json(data);
}

export default idCharacters;
