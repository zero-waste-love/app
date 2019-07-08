<template lang='pug'>
main(class='container-privacy-policy')
  div(class='privacy-policy')
    div(
      class='privacy-policy__en'
    )
      h1 Legal Details &amp; Privacy Policy
      h2 Legal Disclosure
      section
        h3 Information in accordance with Section 5 TMG
        p
         | Sandra Heinzen
         br
         | Virgilstr. 9
         br
         | 81673 München
      section
        h3 Contact Information
        p
          | E-Mail: sandra@zerowaste.love
          br
          | Internet address: www.zerowaste.love
      section
        h3 VAT number
        p
          | VAT indentification number in accorance with Section 27 a of the German VAT act
          br
          | 147/188/80859
      section
        h3 Graphics and Image Sources
        p Sandra Heinzen
      section
        h3 Disclaimer
        h4 Accountability for content
        p The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
        h4 Accountability for links
        p Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.
        h4 Copyright
        p Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
        p Quelle: Übersetzungsdienst translate-24h.de
      section
        h3 Privacy Policy
        p Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.
        p Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.
        p The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.
        p Our privacy policy is structured as follows:
        ul
          li I. Information about us as controllers of your data
          li II. The rights of users and data subjects
          li III. Information about the data processing
      section
        h3 I. Information about us as controllers of your data
        p
          | The party responsible for this website (the "controller") for purposes of data protection law is:
          br
          | Sandra Heinzen
          br
          | Virgilstr. 9
          br
          | 81673 München
          br
          | Deutschland
          br
          | sandra@zerowaste.love
      section
        h3 II. The rights of users and data subjects
        p
          | With regard to the data processing to be described in more detail below, users and data subjects have the right
          br
          | - to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);
          br
          | - to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);
          br
          | - to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;
          br
          | - to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);
          br
          | - to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).
        p In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients.
        p Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible.
      section
        h3 III. Information about the data processing
        p Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below.
        p Model Data Protection Statement for Anwaltskanzlei Weiß &amp; Partner
</template>


<script>
import { mapState } from 'vuex'

export default {
  async asyncData ({ params, store }) {

    return
  },
  components: {

  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      locale: state => state.i18n.locale
    })
  },
  mounted () {
    console.log(this.$nuxt)
  }
}
</script>

<style lang='sass' scoped>
.container-privacy-policy

.privacy-policy
  @extend %container-content

  & h1
    font-size: $fs1
    margin: $unit*5 0
    text-align: center

  & h1,
  & h2,
  & h3
    font-weight: $fw-bold

  & h2,
  & p,
  & ul
    margin-bottom: $unit*3

</style>
