import React from "react"
import Head from "next/head"

export default function Header(){
    return(
        
        <Head>
        <link rel="stylesheet" 
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
              integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
              crossOrigin="anonymous"/>

            {/* font awsome links         */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        {/* feature icon script tag link */}
        <script src="https://unpkg.com/feather-icons"/>

        {/* font Firasans inport link         */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap" rel="stylesheet"/>
             
        <link rel="stylesheet" href="/styles/layout.css" />
        <link rel="stylesheet" href="/styles/layoutcopy.css" />
        <link rel="stylesheet" href="/styles/profile.css" />
        </Head>
        
        
    )
}