'use server';
import { sql } from '@/app/db'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addSchool(data) {
    const details = Object.fromEntries(data.entries())
    const { name,
        address,
        city,
        State,
        contant,
        image,
        email,
    } = details
   
    await sql`INSERT INTO school(name, address, city, state, contact, image, email_id)
    VALUES(${ name }, ${ address }, ${city }, ${ State }, ${contant}, ${image}, ${email})
    `;
    revalidatePath('/');
    redirect('/');

}

export async function getSchools(){
    const data = await sql`SELECT * FROM school`;
    return data
}