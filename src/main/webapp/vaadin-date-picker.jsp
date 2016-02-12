<%@ page import="com.liferay.portal.util.PortalUtil" %>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects/>

<%PortalUtil.setPageTitle("Date picker element for Polymer | Vaadin Elements", request);%>

<!-- Imports -->
<jsp:include page="imports.jsp"/>

<!-- Imports end -->


<!-- Hero section start -->

<div class="w-wallpaper-container elements-hero-mini">
  <div class="w-wallpaper"></div>
  <div class="elements-hero-title row-fluid">
    <div class="span9"><h5 class="helvetica-light"><a href="/elements">Vaadin Elements</a></h5>
    </div>
    <div class="span3 hidden-phone"><a href="https://www.polymer-project.org" class="polymer-tag">Built
      with Polymer</a></div>
  </div>
  <h1 class="helvetica-light">&lt;vaadin-date-picker&gt; <span>1.0.0-alpha1</span></h1>
</div>

<!-- Hero section end -->

<!-- Intro section start -->

<div class="w-wallpaper-container elements-intro">
  <div class="w-wallpaper"></div>
  <div class="row-fluid">
    <div class="span7">
      <p class="lead helvetica-light">Vaadin DatePicker allows you to select a date from a dropdown calendar.</p>
    </div>
    <div class="span5">
      <div class="elements-install">
        <h4>Install</h4>
        <code>bower install --save vaadin-date-picker</code>
      </div>
      <a href="https://cdn.vaadin.com/vaadin-elements/master/vaadin-date-picker/"
         class="w-arrow-button blue small">Show
        documentation</a>
      <a href="https://github.com/vaadin/vaadin-upload" class="w-arrow-button github small">View on
        GitHub</a>
    </div>
  </div>
</div>


<!-- Intro section start -->

<!-- Info section start -->
<div class="elements-section">
  <style>
    vaadin-date-picker {
      max-width: 300px;
    }

    /* Hacks needed for Liferay*/
    vaadin-date-picker input[type='text'],
    vaadin-date-picker input[type='text']:focus,
    vaadin-date-picker input[type='text']:active {
      border: none !important;
      box-shadow: none !important;
      background-color: transparent !important;
      padding: 0;
    }
  </style>
  <h4>Features</h4>
  <div class="row-fluid">
    <div class="span6">
      <ul>
        <li>Scrollable calendar view</li>
        <li>Desktop and mobile support</li>

      </ul>
    </div>
    <div class="span6">
      <ul>
        <li>Two way data binding</li>
        <li>
          Material Design inspired styles to fit in with <a
            href="https://elements.polymer-project.org/browse?package=paper-elements">Paper
          Elements</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<!-- Info section end -->

<!-- Demo section start -->
<div class="elements-section">

  <h4>Examples</h4>

  <h5>Simple usage</h5>
  <view-source>
    <div class="head">
      <!--
      <script src="https://cdn.vaadin.com/vaadin-core-elements/latest/webcomponentsjs/webcomponents-lite.min.js"></script>
      <link rel="import" href="https://cdn.vaadin.com/vaadin-date-picker/master/vaadin-date-picker.html">
      -->
    </div>
    <vaadin-date-picker label="Pick a date"></vaadin-date-picker>
    <vaadin-date-picker label="Birthday" value="2000-01-01"></vaadin-date-picker>
  </view-source>


</div>