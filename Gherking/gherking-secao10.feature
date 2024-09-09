Feature: Emissão de Certificado

    COMO usuário da plataforma
    QUERO ao completar um curso, seja emitido o certificado
    PARA QUE possa comprovar meu conhecimento técnicoFeature Description

Background: Estar matriculado
Given sou usuário logado na plataforma
And matriculado no curso Mandrakes

Scenario Outline: Emissão de certificado
And matriculado no curso <nomeCurso>
When finalizo meu curso
Then meu certificado é disponibilizado no "Meu Perfil"

Examples:
    | nomeCurso |
    | "Mandrakes"  |
    | "Analytics"  |
    | "Pentesting"  |

Scenario: Curso Em Andamento
When assisto as aulas do curso A
Then não tenho meu certificado disponibilizado
But possuo aulas finalizadas