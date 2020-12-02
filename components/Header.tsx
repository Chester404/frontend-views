import React from "react"
import Head from "next/head"

export default function Header(){
    return(
        
        <Head>
        <link rel="stylesheet" 
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
              integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
              crossOrigin="anonymous"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script src="https://unpkg.com/feather-icons"/>
             
        <link rel="stylesheet" href="/styles/layout.css" />
        <link rel="stylesheet" href="/styles/layoutcopy.css" />
        <link rel="stylesheet" href="/styles/profile.css" />
        </Head>
        
        
    )
}