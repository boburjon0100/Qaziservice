import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Lims.css";

const Lims = () => {
  return (
  <>
    <div className="lims">
      <div className="main2">
        <div className="main-text">
          <div className="text_top">
            <h1>ЛИМС</h1>
            <p>Системы управления лабораторной информацией</p>
          </div>
          <div className="text_bot">
            <h4>SampleManager позволит Вам:</h4>
            <div className="text-bot2">
              <div className="seyf-text">
                <img src="./images/seyf.svg" alt="logo" />
                <p>
                  Создать единое надёжное хранение всех результатов данных, в
                  том числе «сырых» данных, получаемых со всех аналитических
                  приборов и средств измерений;
                </p>
              </div>
              <div className="seyf-text">
                <img src="./images/Text1.svg" alt="logo" />
                <p>
                  Автоматически формировать отчёты и протоколы результатов
                  данных в соответствии с утвержденным форматом предприятия;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vector">
          <h5>развернуть</h5>
          <img src="../images/Vector (2).svg" alt="logo" />
        </div>
      </div>

      <div className="lims-text">
        <div className="lims_top">
          <h2>Что такое LIMS</h2>
          <img src="../images/right.svg" alt="Right" />
        </div>
        <div className="lims_bot">
          <p>
            Лабораторная информационно-управляющая система (ЛИМС) –
            Централизованная система баз данных для ведения регистрации и учета
            работ, осуществляемых в условиях лаборатории. ЛИМС предназначена для
            автоматизации лаборатории и интеграции с лабораторным оборудованием
            с целью оптимизации процессов учета приемки проб и результатов
            анализов, обеспечения оперативного контроля качества анализов в
            процессе рабочего цикла, автоматизации учета обслуживания
            оборудования, контроля наличия на складе и потребления расходных
            материалов на проведение анализов. <br /> <br /> Благодаря
            встроенным компонентам, возможна разработка механизма кодирования,
            регистрации и дизайна штрих-кода. Поддерживается формирование
            партий, а также добавление пояснений или дополнительной информации.
          </p>

          <p>
            SampleManager способен отслеживать состояние оборудования и его
            узлов, своевременно уведомляя о необходимости калибровки или
            выполнения технического обслуживания. LIMS также контролирует
            уровень доступа и квалификации операторов.
            <br /> <br />
            SampleManager позволяет самостоятельно настраивать рабочие потоки в
            соответствии с логикой обработки образца в лаборатории, создавать
            интуитивный пользовательский интерфейс, добавлять заметки и
            подсказки, расширить возможности для интеллектуального анализа и
            прослеживаемости данных в соответствии с самыми различными
            требованиями. Это позволяет использовать ЛИМС в таких отраслях, как
            производство продуктов питания, фармацевтических лабораториях
            контроля качества, нефтегазовой промышленности, контрактных
            лабораториях, в металлургической промышленности, обрабатывающей
            промышленности и др. <br /> <br />
            SampleManager может отслеживать состояние запасов расходных
            материалов, таких как стандартные образцы и реагенты. При этом
            используемые реагенты учитываются в каждом лабораторном
            исследовании, что позволяет эффективно планировать необходимость их
            дополнительного заказа, а также учитывать их влияние на качество
            получаемых результатов. Эти данные могут полностью устранить
            проблему поиска подходящего поставщика – система автоматически
            определит дату, когда требуется заказать тот или иной реагент,
            выберет надлежащего поставщика.
          </p>
        </div>
      </div>

      <div className="diagnostika">
        <div className="diag_text">
          <h2>Жизненный цикл исследуемого образца</h2>
          <img src="../images/right.svg" alt="logo" />
        </div>
        <div className="diag_img">
          <img src="../images/daraja.svg" alt="logo" />
        </div>
      </div>

      <div className="diagnostika2">
        <div className="diag_text2">
          <h2>Наши пользователи LIMS</h2>
          <Link>Смотреть отзывы</Link>
        </div>
        <div className="diag_img2">
          <img src="../images/tv.svg" alt="logo" />
        </div>

        <button>Оставить заявку</button>
      </div>

    </div>
    <Footer />
    </>
  );
};

export default Lims;
