/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({

    layout: {
        padding: 10,
        backgroundColor: '#eee',
    },

    blog1: {
        backgroundColor: "aliceblue",
        padding: 20,
        borderRadius: 10,
        marginBottom: 15
    },
    blog2: {
        backgroundColor: "#ddc1f8",
        padding: 20,
        borderRadius: 10,
        marginBottom: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        textAlign: "justify",
        color: "grey",
    },

});

const BlogPosts = () => {
    return (
        <Document>
            <Page style={styles.layout} className="w-full grid grid-cols-1 gap-5 p-4" size="A4" >

                <View className='card p-4 shadow-2xl bg-sky-100 mt-4' style={styles.blog1}>
                    <Text style={styles.title}>
                        Differences between uncontrolled and controlled components.
                    </Text>
                    <Text style={styles.text} >
                        In react Uncontrol components refers to the components who control their states by their own.
                        Control components in react refers to the components who are control by the states from their parent components.
                        This is the Basic difference between controlled and uncontrolled components.
                    </Text>
                </View>

                <View className='card p-4 shadow-2xl bg-violet-100' style={styles.blog2}>
                    <Text style={styles.title}>
                        How to validate React props using PropTypes
                    </Text>
                    <Text style={styles.text}>
                        At first we have to install 'prop-types' package separately using a package manager. then we have to import PropTypes from 'prop-types'. then we have to declare our expected proptypes using a static proptype object. then we can pass any types of props which we defined and they will automatically validated. if we send unknown type props it will give error on console. this is how we can validate props in react.
                    </Text>
                </View>

                <View className='card p-4 shadow-2xl bg-sky-100' style={styles.blog1}  >
                    <Text style={styles.title}>
                        Difference between nodejs and express js. <br />
                    </Text>
                    <Text style={styles.text}>

                        Node js is a js runtime javeScript environment that allows developers to write server side code using javeScript. It provides an non-blocking ,event-driven,  I/O model, which makes it lightweight and efficient. it used for server side applications. <br />

                        Express js is a web application framework built on top of node js. It provides an sets of feachers and tools for building web applications. Express.js can help developer by simplify and streamline the development process using it's common tools and conventions. <br />

                    </Text>
                </View>

                <View className='card p-4 shadow-2xl bg-violet-100' style={styles.blog2}  >
                    <Text style={styles.title}>
                        What is a custom hook, and why will you create a custom hook? <br />
                    </Text>
                    <Text  style={styles.text}>

                        Custom hook is a reuseable javascript function that used in react to share bunch of code between multiple components. It allows us to extract and reuse logic that will commonly shared on components. <br />

                        we can create custom hook for make our code efficient and reduce the redandency of same code. <br />

                        we can create custom hook in a situation where we have to share same logic between multiple components. <br />

                        Some uses cases are: API calls, Authentication, State management etc.

                    </Text>
                </View>

            </Page>
        </Document>
    );
};

export default BlogPosts;