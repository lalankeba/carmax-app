import SwiperContainer from "@/components/swiper-container";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const t = useTranslations('pages.Home');

  return (
    <>
      <div>
        <SwiperContainer />
        
        <Container fluid="md">
          <Row>
            <Col>
              <h1>{t('title')}</h1>
              <Link href="#services">{t('title')}</Link>
            </Col>
          </Row>
          
          <Row>
            <Col>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus dui at orci maximus, quis pulvinar sem congue. Integer non sagittis justo. Pellentesque porttitor varius libero, et mattis neque luctus non. Integer id nisi eu dui semper auctor eget ut justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sit amet sollicitudin lorem. Ut faucibus cursus nibh quis convallis. Pellentesque laoreet diam et felis efficitur, non sagittis erat fringilla. Mauris ut dignissim nibh, ultrices cursus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec velit orci, dignissim eget odio nec, placerat finibus ex. Praesent bibendum elit nec nisl pellentesque sagittis. Duis sed vestibulum risus, non vehicula tellus. Aliquam erat volutpat. Sed lacinia cursus maximus.</p>
            <p>Maecenas ut cursus justo, id bibendum neque. Suspendisse varius pulvinar auctor. In eleifend rhoncus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam quam lorem, convallis eu maximus sed, venenatis at est. Cras in convallis metus, quis mollis lacus. Integer sed cursus dui. Aenean lobortis nisl at faucibus vestibulum. Nam nulla elit, elementum in tempus a, molestie ut ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam hendrerit consequat erat non pulvinar. Phasellus eu sodales leo. Vestibulum non ornare nibh.</p>
            <p>Aenean eget efficitur est. Suspendisse aliquam elit lectus, id ultricies elit egestas non. Ut velit purus, pellentesque et egestas ac, lacinia et lorem. Vivamus faucibus sem vitae enim vestibulum blandit. Phasellus in commodo enim, nec tincidunt sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sed commodo mi. Nullam at dictum erat. Sed mattis viverra augue, id varius turpis laoreet sed. Etiam aliquam placerat elit quis blandit. Fusce viverra augue quis euismod elementum. Duis sit amet malesuada diam. In quis orci a nulla venenatis malesuada.</p>
            <p>Phasellus elit libero, efficitur in ipsum quis, auctor cursus purus. Vestibulum vestibulum tortor vitae massa facilisis dignissim. Mauris in molestie dui. Mauris ut eleifend odio. Duis facilisis tempus arcu. Aenean in cursus massa. Fusce semper metus enim, id pulvinar diam luctus sit amet. Pellentesque fringilla ex libero, non auctor enim sollicitudin finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce quis fringilla urna. Sed ornare, dui non iaculis pretium, nisl nibh dictum ante, a consectetur mauris eros vitae metus. Proin posuere purus pharetra sapien laoreet, et eleifend ipsum hendrerit. Praesent tempus ac arcu non pharetra.</p>
            <p>Duis eu placerat lacus, vel condimentum quam. Sed nec diam sem. Sed at mollis dui, lacinia dignissim risus. Aliquam ornare nulla ut massa imperdiet commodo. Vestibulum fermentum fringilla nisl eu congue. Phasellus in tortor eget lacus sodales maximus quis ut tortor. Ut consequat, diam vitae eleifend congue, metus lorem dictum sem, ut dapibus ex quam ornare est. Fusce pharetra efficitur sem ac congue. Phasellus ut purus erat. Ut a lacus lectus.</p>
            <p>Suspendisse vulputate ultrices rhoncus. Sed mattis, augue id pharetra auctor, metus urna sollicitudin sapien, nec vulputate lacus dui eget nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tempus nulla leo. Nullam eleifend purus eu sem scelerisque, finibus egestas velit placerat. Cras nisi eros, vehicula vitae arcu ut, volutpat porttitor lectus. Donec nec arcu arcu. In tortor quam, rhoncus vel tortor nec, vehicula tristique sem. Vestibulum tincidunt convallis feugiat. Mauris commodo dapibus magna, varius pellentesque turpis sagittis eu.</p>
            <p>Curabitur non ante non lacus mattis egestas. Praesent iaculis est nisl, volutpat sollicitudin arcu placerat nec. Donec mi magna, rutrum et metus ac, efficitur dictum orci. Suspendisse in auctor dolor. Donec vestibulum nunc ipsum, ac imperdiet tellus congue sed. Suspendisse venenatis ex elit, sit amet dapibus ante eleifend sit amet. Aliquam laoreet metus at ex semper laoreet. Pellentesque ligula nisl, luctus in vehicula sit amet, commodo sit amet felis. Duis condimentum tincidunt faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras tincidunt felis non risus dapibus, vel viverra eros consectetur. Quisque in nisl eu ipsum ultricies porta. Ut sed euismod nisi. Donec vitae massa magna.</p>
            <p>Phasellus vel mattis urna. Donec aliquet vestibulum lacinia. Suspendisse elementum nulla non urna dignissim eleifend. Sed ut ligula venenatis, malesuada neque eget, pulvinar dolor. Curabitur in pellentesque nisl. Curabitur vel libero a nisl semper vehicula a ac turpis. Nulla at tellus sagittis, auctor mi non, hendrerit dolor. Mauris luctus tellus pulvinar lacus iaculis hendrerit. Maecenas sed luctus velit, vel consequat est. Nullam nisi odio, lacinia sed ultricies tempus, fermentum id justo. Nunc purus risus, mollis nec blandit a, interdum id mi. Vestibulum lobortis eros massa, vel mattis velit aliquam sollicitudin. Nunc condimentum risus non ornare blandit. Nunc felis justo, molestie eget ultricies id, viverra in sapien.</p>
            <p>Etiam in magna ut nulla porttitor condimentum vel et mauris. Fusce id tincidunt ante, a vulputate neque. Donec eget purus nulla. Aenean tempor facilisis erat eget ullamcorper. Nunc et tortor ut felis congue aliquet. Praesent sit amet venenatis sapien. Sed nec leo tellus. Donec vel lectus dictum, vulputate orci quis, finibus enim. Vestibulum a tellus at libero blandit placerat vel eu justo. Ut suscipit nec felis eu posuere. In eget lacus gravida turpis mattis fringilla vitae non tellus.</p>
            <p>Nulla facilisi. Cras malesuada ac justo a laoreet. Suspendisse hendrerit suscipit lorem id semper. Integer ante lectus, porta sed enim non, ornare tempor erat. Nulla venenatis risus maximus, finibus arcu nec, facilisis orci. Fusce tristique eros quis turpis semper, nec bibendum odio mollis. Aliquam vitae efficitur nunc. Nulla dapibus justo eget velit accumsan tempor.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
