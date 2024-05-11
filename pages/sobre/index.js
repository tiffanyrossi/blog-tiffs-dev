import Layout from "../../components/layout";
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';
import styles from '../../components/layout.module.css';
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import photo from './../../public/images/foto.jpeg';

const siteTitle = "Sobre";

export default function Sobre() {

    var dob = new Date("07/03/1991");
    var monthDiff = Date.now() - dob.getTime();
    var ageDt = new Date(monthDiff);
    var year =  ageDt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    return (
        <Layout siteTitle={siteTitle}>
            <h2>[tiffany rossi]</h2>
            <ExportedImage
                    priority
                    src={photo}
                    placeholder="empty"
                    className={styles.profilePhoto}
                    width={250}
                    height={250}
                    alt="Tiffany Rossi"
                />
            <p>
                oi! eu sou a Tiffany, <strong>desenvolvedora java</strong>. em 2022, me formei em <i>desenvolvimento back-end</i> pela UNOPAR, e logo no primeiro estágio descobri que também gosto muito de brincar com front-end :)
            </p>
            <p>
                atualmente trabalho em um grande banco, desenvolvendo APIs REST. meu objetivo é me tornar uma desenvolvedora melhor - para isso, estou reforçando aprendizados antigos e agregando novos conhecimentos. acredito no poder de <Link href="/posts/aprender-em-publico">aprender em público</Link>, por isso uso esse blog como documentação pessoal dos meus estudos.
            </p>
            <p>
                para além do profissional, sou apaixonada por artes visuais, cozinhar e viajar. sou gateira e cachorreira, tomo mais café do que deveria e minha comida preferida é tofu. tenho {age} anos e antes de vir para a tecnologia era dona de uma micro-produtora de audiovisual. falo inglês fluente, e estou aprendendo espanhol. um dia espero conseguir falar italiano e, quem sabe, também aprender um pouco de alemão.
            </p>
            <p>
                me dá um oi no <a href="https://twitter.com/tiffsrc" target="_blank"><FaTwitter className={styles.icon} />twitter</a> se quiser jogar conversa fora, falar sobre transição de carreira e desenvolvimento ou trocar receitas veganas. se o assunto for trabalho, me chama no <a href="https://linkedin.com/in/tiffanyrossi" target="_blank"><FaLinkedin className={styles.icon} />linkedin</a>.
            </p>

            <h3>conhecimentos</h3>
            <p>
                java • javascript • html • css • typescript • sql • spring boot • apache camel • react • nextjs • apache camel • camunda bpmn • git • github • jenkins • agile/scrum • jira • confluence
            </p>

            <h3>blog</h3>
            <p>
                este singelo bloguinho foi criado com <strong>react + nextjs</strong>. foi meu primeiro projeto com nextjs e comecei seguindo a <a href="https://nextjs.org/learn/basics/create-nextjs-app" target="_blank">documentação do nextjs</a>, que ensina a criar um blog estático simples.
            </p>
            <p>
                depois disso, desenvolvi toda a implementação das <strong>tags</strong>, dei uma caprichada no css, criei um agregador de links e estou planejando as próximas melhorias.
            </p>
            <p>
                avatar portrait created by <a href="http://instagram.com/bananahkim" target="_blank">@bananahkim</a>.
            </p>

        </Layout>
    )
}