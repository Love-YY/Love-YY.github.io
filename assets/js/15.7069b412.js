(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{498:function(e,v,_){"use strict";_.r(v);var c=_(5),o=Object(c.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("使用 "),_("code",[e._v("Java")]),e._v(" 的 "),_("code",[e._v("Web Services")]),e._v(" 技术创建一个待办事项管理系统。不同的客户应该能够连接到一个服务器管理各种待办事项列表对象，比如查询列表项，添加列表项，删除列表项，明确待办事项列表。服务器应该也有管理功能，允许使用者进行注册。每个待办事项列的表项有一个描述、一个开始时间和一个结束时间，用户必须在规定时间内完成。用户可以添加任意数量的项目到他们的待办事项清单中。")]),e._v(" "),_("h2",{attrs:{id:"web-services-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-services-简介"}},[e._v("#")]),e._v(" Web Services 简介")]),e._v(" "),_("p",[_("code",[e._v("Web Services")]),e._v(" 是设计支持机器与机器通过网络互操作的一种软件系统（W3C 的定义）。 "),_("code",[e._v("Web Services")]),e._v(" 是一种分布式的体系结构，可以跨域应用系统的对象体系、运行平台、开发语言等的界限，以服务的形式封装应用并对外发布，供用户或其他企业调用，从而形成一个基于 Web 的服务共享平台。 "),_("code",[e._v("Web Services")]),e._v(" 是描述一些利用标准化的 "),_("code",[e._v("XML")]),e._v(" 消息传递机制可以通过网络访问的操作的接口。 "),_("code",[e._v("Web Services")]),e._v(" 是用标准的、规范的 "),_("code",[e._v("XML")]),e._v(" 概念描述的，称为 "),_("code",[e._v("Web Services")]),e._v(" 的服务描述（WSDL）。这一描述囊括了与服务交互需要的全部细节，包括消息格式、详细操作、传输协议和位置。该接口隐藏了实现服务的细节，允许独立于实现服务基于的硬件或软件平台和编写服务所用的语言使用服务。这允许并支持基于 "),_("code",[e._v("Web Services")]),e._v(" 的应用程序称为松散耦合、面向组件或跨技术实现。 "),_("code",[e._v("Web Services")]),e._v(" 履行一项特定的任务或一组任务。")]),e._v(" "),_("h3",{attrs:{id:"xml-扩展标记语言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xml-扩展标记语言"}},[e._v("#")]),e._v(" XML 扩展标记语言")]),e._v(" "),_("p",[_("code",[e._v("XML")]),e._v(" 是 EXtensible Markup Language 的缩写， "),_("code",[e._v("XML")]),e._v(" 是一种类似于 "),_("code",[e._v("HTML")]),e._v(" 的标记语言， "),_("code",[e._v("XML")]),e._v(" 是用来描述数据的， "),_("code",[e._v("XML")]),e._v(" 的标记不是在 "),_("code",[e._v("XML")]),e._v(" 中预定义的，你必须定义自己的标记。 "),_("code",[e._v("XML")]),e._v(" 使用文档类型定义（DTD）或者模式（Schema）来描述数据， "),_("code",[e._v("XML")]),e._v(" 使用 "),_("code",[e._v("DTD")]),e._v(" 或者 "),_("code",[e._v("Schema")]),e._v(" 后就是自描述的语言。")]),e._v(" "),_("h3",{attrs:{id:"soap-简单对象访问协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#soap-简单对象访问协议"}},[e._v("#")]),e._v(" SOAP 简单对象访问协议")]),e._v(" "),_("p",[_("code",[e._v("SOAP")]),e._v(" （Simple Object Access Protocol）简单对象访问协议是在分散或分布式的环境中交换信息的简单的协议，是一个基于 "),_("code",[e._v("XML")]),e._v(" 的协议。它包括四个部分： "),_("code",[e._v("SOAP")]),e._v(" 封装（envelop），封装定义了一个描述消息中的内容是什么，是谁发送的，谁应当接受并处理它以及如何处理它们的框架； "),_("code",[e._v("SOAP")]),e._v(" 编码规则（encoding rules)，用于表示应用程序需要使用的数据类型的实例；"),_("code",[e._v("SOAP RPC")]),e._v(" 表示（RPC representation），表示远程过程调用和应答的协定； "),_("code",[e._v("SOAP")]),e._v(" 绑定（binding），使用底层协议交换信息。")]),e._v(" "),_("h3",{attrs:{id:"wsdl-web-services-描述语言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#wsdl-web-services-描述语言"}},[e._v("#")]),e._v(" WSDL Web Services 描述语言")]),e._v(" "),_("p",[e._v("它的主要构成要素有五个。 "),_("strong",[e._v("Types")]),e._v("：定义 "),_("code",[e._v("WSDL")]),e._v(" 定义中所用到的数据类型，即 XML Schema Types；"),_("strong",[e._v("Message")]),e._v("：对一组消息的输入和输出参数的定义；"),_("strong",[e._v("PortType")]),e._v("：定义 Web 服务的操作；"),_("strong",[e._v("Binding")]),e._v("：描述特定服务接口的协议、数据格式、安全性和其它属性；"),_("strong",[e._v("Services")]),e._v("：制定特定服务的 URL 和提供的调用接口，包含一组端口元素。这样 "),_("code",[e._v("Web services")]),e._v(" 就实现了自我描述。")]),e._v(" "),_("h3",{attrs:{id:"uddi-统一描述、发现和集成协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uddi-统一描述、发现和集成协议"}},[e._v("#")]),e._v(" UDDI 统一描述、发现和集成协议")]),e._v(" "),_("p",[_("code",[e._v("UDDI")]),e._v(" 同时也是 Web 服务集成的一个体系框架。它包含了服务描述与发现的标准规范。 "),_("code",[e._v("UDDI")]),e._v(" 规范利用了 W3C 和 Internet 工程任务组织（IETF）的很多标准作为其实现基础，比如扩展标注语言 "),_("code",[e._v("XML")]),e._v(" ， "),_("code",[e._v("HTTP")]),e._v(" 和域名服务 "),_("code",[e._v("DNS")]),e._v(" 这些协议。有了它我们的 "),_("code",[e._v("Web Services")]),e._v(" 就可以注册到 "),_("code",[e._v("UDDI")]),e._v(" 中心，供其客户查找使用。")]),e._v(" "),_("h2",{attrs:{id:"web-servies-体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-servies-体系结构"}},[e._v("#")]),e._v(" Web Servies 体系结构")]),e._v(" "),_("p",[e._v("Web 服务协议栈的基础是网络层。Web 服务要被服务请求者调用，就必须是可以通过网络访问的。因特网上可以公用的 Web 服务使用普遍部署的网络协议。"),_("code",[e._v("HTTP")]),e._v(" 凭借其普遍性，成为了因特网可用的 Web 服务真正的标准网络协议。Web 服务还可以支持其它因特网协议，包括 "),_("code",[e._v("SMTP")]),e._v(" 和 "),_("code",[e._v("FTP")]),e._v(" 。内部网域可以使用可靠消息传递和调用基础结构。")]),e._v(" "),_("p",[e._v("下一层是基于 "),_("code",[e._v("XML")]),e._v(" 的消息传递，它表示使用 "),_("code",[e._v("XML")]),e._v(" 作为消息传递协议的基础。选择 "),_("code",[e._v("SOAP")]),e._v(" 作为 "),_("code",[e._v("XML")]),e._v(" 消息传递协议有很多原因：")]),e._v(" "),_("ul",[_("li",[e._v("它是使用 "),_("code",[e._v("XML")]),e._v(" 传送以文档为中心的消息以及远程过程调用的标准化封装机制。")]),e._v(" "),_("li",[_("code",[e._v("SOAP")]),e._v(" 很简单，它基本上是一个用 "),_("code",[e._v("XML")]),e._v(" 信封作为有效负载的 HTTP POST。")]),e._v(" "),_("li",[_("code",[e._v("SOAP")]),e._v(" 比对 "),_("code",[e._v("XML")]),e._v(" 简单的 HTTP POST 更受青睐，因为它定义了一个标准机制，这个机制将正交扩展（orthogonal extension）合并为使用 "),_("code",[e._v("SOAP")]),e._v(" 报头和对操作或函数进行标准编码的消息。")]),e._v(" "),_("li",[_("code",[e._v("SOAP")]),e._v(" 消息支持 Web 服务体系结构中的发布、查找和绑定操作。")])]),e._v(" "),_("p",[e._v("服务描述层实际上是描述文档的一个协议栈。首先， "),_("code",[e._v("WSDL")]),e._v(" 是基于 "),_("code",[e._v("XML")]),e._v(" 的服务描述的真正标准。这是支持可互操作的 Web 服务所需的最小标准服务描述。 "),_("code",[e._v("WSDL")]),e._v(" 定义了服务交互的接口和结构。要指定业务环境、服务质量和服务之间的关系，我们还需要另外的描述。 "),_("code",[e._v("WSDL")]),e._v(" 文档可以由其它服务描述文档来补充，从而描述 Web 服务的这些更高级的方面。例如，描述业务环境除了使用  "),_("code",[e._v("WSDL")]),e._v(" 文档，还要使用 "),_("code",[e._v("UDDI")]),e._v(" 数据结构。Web 服务流程语言（Web Services Flow Language，WSFL）文档中则描述了服务组成和流程。")]),e._v(" "),_("p",[e._v("接下来我们开始实战一下。✊")]),e._v(" "),_("p",[e._v("好叭，我已经忘了当时咋做的，这个坑后面再填叭。😭😭")])])}),[],!1,null,null,null);v.default=o.exports}}]);