export async function GetDataHome(){
    try{
        const url = (`${process.env.NEXT_PUBLIC_API_URL}
            -c959ff70-687b-11f0-8787-bd4453357309/objects/68821408d5e8b76ec441c0a2?pretty=true&read_key=
            ${process.env.READY_KEY}&depth=1&props=slug,title,metadata,type`)

    console.log('url', url);

    const res = await fetch('https://api.cosmicjs.com/v3/buckets/devmotors-production-c959ff70-687b-11f0-8787-bd4453357309/objects/68821408d5e8b76ec441c0a2?pretty=true&read_key=yiiALoHHC7nUYR4oZ3kLi8K6v83dVaKzV1TVP02CQjWWsAKy72&depth=1&props=slug,title,metadata,type');

        if(!res.ok){
           throw new Error ("Failed to fetch data") 
        }
        return res.json();
        
    }catch(err){
        console.error("Erro original", err );
        throw new Error("Failed to fetch data")
    }
}

export async function getSubMenu(){
    try{
        const url = (`${process.env.NEXT_PUBLIC_API_URL}
            -c959ff70-687b-11f0-8787-bd4453357309/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=
            ${process.env.READY_KEY}&depth=1&props=slug,title,type,`)

            console.log('url', url);

            const res = await fetch ('https://api.cosmicjs.com/v3/buckets/devmotors-production-c959ff70-687b-11f0-8787-bd4453357309/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=yiiALoHHC7nUYR4oZ3kLi8K6v83dVaKzV1TVP02CQjWWsAKy72&depth=1&props=slug,title,type,')

            if(!res.ok){
                throw new Error("Failed to fetch menu data")
            }
            return res.json();

    }catch(err){
        throw new Error("Failed to fetch menu data")
    }
}



export async function getItemBySlug(itemSlug: string){
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    //definindo o objeto de consulta pelo slug
    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }),
        props:'slug,title,content,metadata',
        read_key: process.env.READ_KEY as string
    })
    const url = `${baseUrl}?${queryParams.toString()}`;
    console.log(url);
    try{
        const res = await fetch(url, {next: {revalidate: 120}})
        if(!res.ok){
          throw new Error("Failed get item by slug")    
        }
        return res.json();
    }catch(err){
       throw new Error("Failed get item by slug")  
    }
}