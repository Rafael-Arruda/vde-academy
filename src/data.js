import etica from '../public/imgs/disciplines/etica-oab.jpg'
import constitucional from '../public/imgs/disciplines/direito-constitucional.jpg'
import administrativo from '../public/imgs/disciplines/direito-administrativo.jpg'
import civil from '../public/imgs/disciplines/direito-civil.jpg'
import processualCivil from '../public/imgs/disciplines/direito-processual-civil.webp'
import penal from '../public/imgs/disciplines/direito-penal.webp'
import processualPenal from '../public/imgs/disciplines/direito-processual-penal.webp'
import trabalhista from '../public/imgs/disciplines/direito-do-trabalho.jpg'
import processualTrabalhista from '../public/imgs/disciplines/direito-processual-trabalho.jpg'
import empresarial from '../public/imgs/disciplines/direito-empresarial.webp'
import tributario from '../public/imgs/disciplines/direito-tributario.jpg'
import humanos from '../public/imgs/disciplines/direitos-humanos.webp'
import ambiental from '../public/imgs/disciplines/direito-ambiental.jpeg'
import internacional from '../public/imgs/disciplines/direito-internacional.jpg'
import filosofia from '../public/imgs/disciplines/filosofia-direito.jpg'

export let disciplinesData = [
    {
        "id": 1,
        "name": "Ética e Estatuto da OAB",
        "image": etica
    },
    {
        "id": 2,
        "name": "Direito Constitucional",
        "image": constitucional
    },
    {
        "id": 3,
        "name": "Direito Administrativo",
        "image": administrativo
    },
    {
        "id": 4,
        "name": "Direito Civil",
        "image": civil
    },
    {
        "id": 5,
        "name": "Direito Processual Civil",
        "image": processualCivil
    },
    {
        "id": 6,
        "name": "Direito Penal",
        "image": penal
    },
    {
        "id": 7,
        "name": "Direito Processual Penal",
        "image": processualPenal
    },
    {
        "id": 8,
        "name": "Direito do Trabalho",
        "image": trabalhista
    },
    {
        "id": 9,
        "name": "Direito Processual do Trabalho",
        "image": processualTrabalhista
    },
    {
        "id": 10,
        "name": "Direito Empresarial",
        "image": empresarial
    },
    {
        "id": 11,
        "name": "Direito Tributário",
        "image": tributario
    },
    {
        "id": 12,
        "name": "Direitos Humanos",
        "image": humanos
    },
    {
        "id": 13,
        "name": "Direito Ambiental",
        "image": ambiental 
    },
    {
        "id": 14,
        "name": "Direito Internacional",
        "image": internacional
    },
    {
        "id": 15,
        "name": "Filosofia do Direito",
        "image": filosofia
    }
]

export let subjectsData = [
    {
        "disciplineId": 1,
        "items": [
            "Prerrogativas do Advogado",
            "Infrações e Sanções Disciplinares",
            "Honorários Advocatícios",
            "Publicidade na Advocacia",
            "Sociedades de Advogados"
        ]
    }, 
    {
        "disciplineId": 2,
        "items": [
            "Princípios Fundamentais",
            "Direitos e Garantias Fundamentais",
            "Organização dos Poderes",
            "Controle de Constitucionalidade",
            "Ordem Social"
        ]
    },
    {
        "disciplineId": 3,
        "items": [
            "Atos Administrativos",
            "Poderes da Administração Pública",
            "Licitações e Contratos Administrativos",
            "Improbidade Administrativa",
            "Responsabilidade Civil do Estado"
        ]
    },
    {
        "disciplineId": 4,
        "items": [
            "Personalidade e Capacidade",
            "Obrigações e Contratos",
            "Direitos Reais",
            "Direito de Família",
            "Direito das Sucessões"
        ]
    }, 
    {
        "disciplineId": 5,
        "items": [
            "Princípios do Processo Civil",
            "Competência dos Tribunais",
            "Fases do Processo",
            "Recursos no Processo Civil",
            "Cumprimento de Sentença e Execução"
        ]
    },
    {
        "disciplineId": 6,
        "items": [
            "Princípios do Direito Penal",
            "Teoria do Crime",
            "Crimes contra o Patrimônio",
            "Crimes contra a Pessoa",
            "Penas e Medidas de Segurança"
        ]
    },
    {
        "disciplineId": 7,
        "items": [
            "Princípios do Processo Penal",
            "Inquérito Policial",
            "Ação Penal e Competência",
            "Provas no Processo Penal",
            "Recursos no Processo Penal"
        ]
    },
    {
        "disciplineId": 8,
        "items": [
            "Relação de Emprego",
            "Contrato de Trabalho",
            "Jornada de Trabalho",
            "Direitos Trabalhistas",
            "Dissídios Coletivos"
        ]
    },
    {
        "disciplineId": 9,
        "items": [
            "Princípios do Processo Trabalhista",
            "Competência da Justiça do Trabalho",
            "Ritos Processuais",
            "Execução Trabalhista",
            "Recursos no Processo do Trabalho"
        ]
    },
    {
        "id": 10,
        "items": [
            "Empresário e Sociedade Empresarial",
            "Títulos de Crédito",
            "Falência e Recuperação Judicial",
            "Propriedade Industrial",
            "Direito Societário"
        ]
    },
    {
        "disciplineId": 11,
        "items": [
            "Sistema Tributário Nacional",
            "Espécies de Tributos",
            "Princípios Tributários",
            "Imunidades e Isenções Tributárias",
            "Execução Fiscal"
        ]
    },
    {
        "disciplineId": 12,
        "items": [
            "Fundamentos dos Direitos Humanos",
            "Tratados Internacionais de Direitos Humanos",
            "Proteção dos Grupos Vulneráveis",
            "Direitos e Deveres Individuais e Coletivos",
            "Sistemas de Proteção dos Direitos Humanos"
        ]
    },
    {
        "disciplineId": 13,
        "items": [
            "Princípios do Direito Ambiental",
            "Licenciamento Ambiental",
            "Crimes Ambientais",
            "Política Nacional do Meio Ambiente",
            "Responsabilidade Ambiental"
        ]
    },
    {
        "disciplineId": 14,
        "items": [
            "Fontes do Direito Internacional",
            "Direito Internacional Público e Privado",
            "Organizações Internacionais",
            "Tratados Internacionais",
            "Direitos Humanos no Direito Internacional"
        ]
    },
    {
        "disciplineId": 15,
        "items": [
            "Conceitos Fundamentais da Filosofia do Direito",
            "Escolas do Pensamento Jurídico",
            "Direito e Moral",
            "Justiça e Equidade",
            "Positivismo e Jusnaturalismo"
        ]
    }
]