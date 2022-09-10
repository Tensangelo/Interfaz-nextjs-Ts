// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const allCharacters = async (request: NextApiRequest, response: NextApiResponse) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json());

    response.status(200).json(data);

}

export default allCharacters;
