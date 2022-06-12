(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"tasksBody": "Home_tasksBody__mbDAN"
};


/***/ }),

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.js





const getStaticProps = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/api/tasks/');
    const data = await res.json();
    console.log(data);
    return {
        props: {
            Tasks: data
        }
    };
};
const Tasks = ({ Tasks: Tasks1  })=>{
    const { 0: tasks1 , 1: setTasks  } = (0,external_react_.useState)(Tasks1);
    const { 0: isUpdating , 1: setIsUpdating  } = (0,external_react_.useState)(false);
    const { 0: inEditTask , 1: setInEditTask  } = (0,external_react_.useState)(null);
    const { 0: updatingTask , 1: setUpdatingTask  } = (0,external_react_.useState)(null);
    const formInputRef = (0,external_react_.useRef)();
    const fetchTasks = ()=>{
        fetch('http://127.0.0.1:8000/api/tasks/').then((res)=>{
            if (!res.ok) {
                throw Error("There is something wrone");
            }
            return res.json();
        }).then((data)=>{
            console.log("fetching...", data);
            setTasks(data);
        }).catch((err)=>{
            if (!err.name === 'AbortError') {
                console.log("fetching an Error");
            } else {
                console.log("fetch aborted");
            }
        });
    };
    // useEffect(()=> {
    //   console.log("process started")
    //   fetchTasks();
    // }, [])
    const handleEdit = (task)=>{
        setIsUpdating(true);
        setInEditTask(task.id);
        setUpdatingTask(task);
        formInputRef.current.focus();
        formInputRef.current.value = task.content;
    };
    const handlechange = (e)=>{
        if (e.target.value.length === 0) {
            setIsUpdating(false);
        }
        setInEditTask(e.target.value);
    };
    const handleAction = (e)=>{
        e.preventDefault();
        let url = null;
        if (isUpdating) {
            console.log('updated');
            console.log({
                'content': inEditTask
            });
            url = `http://127.0.0.1:8000/api/task/${updatingTask.id}/`;
            console.log(url);
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'content': inEditTask
                })
            }).then((response)=>{
                console.log(response);
                console.log('Updated successfully');
                setIsUpdating(false);
                formInputRef.current.value = '';
            }).then(()=>fetchTasks()
            );
        } else {
            console.log('added');
            console.log(inEditTask);
            url = 'http://127.0.0.1:8000/api/tasks/';
            console.log(url);
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'content': inEditTask
                })
            }).then((response)=>{
                console.log(response);
                console.log('Added successfully');
                formInputRef.current.value = '';
            }).then(()=>fetchTasks()
            );
        }
    };
    const handleDelete = (id)=>{
        console.log("Deleted");
        var url = `http://127.0.0.1:8000/api/task/${id}/`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatingTask)
        }).then((response)=>{
            console.log(response);
            console.log('deleted successfully');
            formInputRef.current.value = '';
            console.log(response.status);
            if (response.status === 204) {
                console.log(response.status);
                setTasks((tasks)=>tasks.filter((task)=>task.id !== id
                    )
                );
            }
        }).then(()=>fetchTasks()
        );
    };
    const handleDone = (id)=>{
        console.log("Done");
        var url = `http://127.0.0.1:8000/api/task-doneUndone/${id}/`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response)=>{
            console.log(response);
            formInputRef.current.value = '';
            console.log(response.status);
        }).then(()=>fetchTasks()
        );
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Home_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Home_module_default()).tasksBody,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "row mb-5",
                    onSubmit: handleAction,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "form-control form-control",
                                type: "text",
                                "aria-label": ".form-control-lg example",
                                ref: formInputRef,
                                onChange: (e)=>handlechange(e)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "btn btn-primary d-inline",
                                children: [
                                    isUpdating && 'Update',
                                    !isUpdating && 'ADD'
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: tasks1.map((task)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-3 row",
                            children: [
                                task.done ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "d-inline col-8 text-decoration-line-through",
                                    onClick: ()=>handleDone(task.id)
                                    ,
                                    children: task.content
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "d-inline col-8",
                                    onClick: ()=>handleDone(task.id)
                                    ,
                                    children: task.content
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-primary mr-5",
                                        onClick: ()=>handleEdit(task)
                                        ,
                                        children: "Edit"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-danger ml-2 float-right",
                                        onClick: ()=>handleDelete(task.id)
                                        ,
                                        children: " - "
                                    })
                                })
                            ]
                        }, task.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const pages = (Tasks);


/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(304)));
module.exports = __webpack_exports__;

})();