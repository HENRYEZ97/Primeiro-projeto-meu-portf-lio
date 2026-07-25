export const projetos = [
    {
        slug: "ez-chat",
        titulo: "EZ Chat",
        resumo: "Sistema de chat empresarial em tempo real",
        descricao: "Desenvolvi o EZ Chat para colocar em prática novas tecnologias que estou estudando atualmente. O EZ Chat é uma aplicação de chat em tempo real desenvolvida com foco em comunicação instantânea, arquitetura moderna e experiência fluída. Este projeto simula um chat funcional explorando conceitos avançados como rotas, websockets e gerenciamentos de estado, tudo o que venho aprendendo ao longo dos meses estudando desenvolvimento web. Este projeto representa um salto técnico muito importante para mim, indo além do front-end básico que era o que eu mais estudava. Com este projeto comecei a aprender node.js, express e socket.io.",
        funcionalidades: ["Comunicação em tempo real", "Estrutura de rotas organizada", "Interface moderna e responsiva", "Atualização instantânea de mensagens", "Componentes reutilizáveis e tipados", "Login de usuário", "Cadastro de usuário", "Chat privado", "Chat por departamentos"],
        tecnologias: ["React", "Next.js", "TypeScript", "Node.js", "WebSocket", "TailwindCSS"],
        imagens: [
            "/imagens/cadastro.png",
            "/imagens/login.png",
            "/imagens/interface3.png",
            "/imagens/interface2.png",
            "/imagens/interface4.png",
            "/imagens/interface.png"
        ],
    },

    {
        slug: "hydrosense",
        titulo: "HYDROSENSE",
        resumo: "Sistema de Monitoramento de áreas de risco",
        descricao: "O Hydrosense é um sistema de alerta de enchentes e monitoramento em tempo real que desenvolvi para uma feira tecnológica da faculdade, com foco em prevenção de riscos e aplicação prática da tecnologia em problemas reais da sociedade. O sistema coleta dados de nível da água por meio de um sensor ultrassônico ligado no módulo ESP32. Ele envia essas informações em tempo real para o backend e as exibe no Dashboard dessa interface do app. Ele é interativo e mostra os dados e salva no histórico do sistema, permitindo o acompanhamento contínuo e visualização clara do cenário. A idéia é que cada morador de área de risco possa fazer o monitoramento da sua área e também que autoridades competentes possam utilizar esses dados para fazer levantamento e tomar as devidas providências.",
        funcionalidades: ["Monitoramento em tempo real do nível da água", "Dashboard com gráficos dinâmicos", "Atualização instantânea via Websocket", "Histórico de leituras", "Side bar com nomes dos bairros para monitorar", "Data e hora dos registros da leitura"],
        tecnologias: ["Next.js", "Typescript", "Node.js", "Websocket", "TailwindCSS", "ESP32", "Sensor Ultrassônico"],
        imagens: [
            "/imagens/hydro4.png",
            "/imagens/hydro2.png",
            "/imagens/hydro3.png",
            "/imagens/hydro5.png",
            "/imagens/hydro6.png",
            "/imagens/hydro1.png"
        ],
    },


    {
        slug: "sistema-pedidos",
        titulo: "Sistema de pedidos de lanches",
        resumo: "Sistemas para fazer pedidos de lanches com facilidade e rapidez",
        descricao: "Desenvolvi esse Sistema de Pedidos de Lanches com o objetivo de simular uma aplicação real de pedidos online, focada em usabilidade, organização visual e fluxo simples para o usuário final. A aplicação está responsiva e permite visualizar produtos, navegar por categorias e realizar os pedidos de forma intuitiva. Esse projeto marcou uma etapa importante da minha evolução no front-end, consolidando fundamentos essenciais de React, React-Router, Vite e organização de componentes.",
        funcionalidades: ["Listagem de produtos por categoria", "Interface responsiva", "Componentização reutilizável", "Fluxo simples e direto para pedidos", "Layout focado em experiência do usuário"],
        tecnologias: ["React", "React-Router", "Vite", "JavaScript", "HTML5", "CSS"],
        imagens: [
            "/imagens/lanche3.png",
            "/imagens/lanche1.png",
            "/imagens/lanche2.png",
            "/imagens/lanche4.png",
            "/imagens/lanche5.png",
            "/imagens/lanche6.png"
        ],
    },

    {
        slug: "Sis-Clinic - Sistema de gestão clínica",
        titulo: "Sis-Clinic",
        resumo: "Sistema de gestão clínica para profissionais que atuam diretamente no fluxo operacional.",
        descricao: "O sistema de gestão clínica foi desenvolvido para atender os profissionais que estão em todo o fluxo operacional de clínicas médicas, contemplando dois perfis principais de usuários: recepcionistas e médicos. Cada perfil possui responsabilidades distintas e níveis de acesso adequados às suas funções, garantindo segurança, organização e eficiência no processo de atendimento.",
        funcionalidades: ["Controle de perfil (RBAC)", "Gestão de Médicos", "Cadastro de pacientes", "Validação de dados", "Encaminhamento para atendimento", "Visualização de fila individual", "Status do atendimento", "Início de consulta", "Registro clínico", "Finalização de atendimento"],
        tecnologias: ["Next.js", "TailwindCSS", "React", "Javascript", "Typescript", "HTML5"],
        imagens: [
            "/imagens/login1.png",
            "/imagens/paginainicial.png",
            "/imagens/recepcao.png",
            "/imagens/fila.png",
            "/imagens/fila1.png",
            "/imagens/cadastros.png",
            "/imagens/consulta.png"
        ],
    },

    {
        slug: "Ez tecnologia - Sistema de anúncio para vendas",
        titulo: "Ez tecnologia",
        resumo: "O ez tecnologia é um sistema de anúncios de vendas tech que facilita na compra e venda de produtos tecnológicos.",
        descricao: "O ez tecnologia foi desenvolvido para o anúncio e compras de materiais techs. O catálogo de produtos vai aumentando conforme anúncios forem postados e para facilitar a busca por produtos, no início da tela possui uma busca e filtro por categorias.",
        funcionalidades: ["Controle por perfil (RBAC)", "Cadastro de usuário", "Login de usuário", "Cadastro de produtos", "Upload de imagens", "Link para o contato de whatsapp do vendedor"],
        tecnologias: ["React", "HTML5", "CSS", "Typescript", "Javascript", "Firebase", "React-icons"],
        imagens: [
            "/imagens/ez1.png",
            "/imagens/ez2.png",
            "/imagens/ez3.png",
            "/imagens/ez4.png",
            "/imagens/ez5.png",
            "/imagens/ez6.png",
            "/imagens/ez7.png"
        ],
    }

]