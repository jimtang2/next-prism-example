"use client"
import { useEffect } from "react"
import "prismjs/themes/prism-okaidia.css";
import Prism from "prismjs"
import "prismjs/components/prism-yaml"

export default function SyntaxHighlighter() {
	useEffect(() => {
	  Prism.highlightAll()
	}, [])

	return <></>
}