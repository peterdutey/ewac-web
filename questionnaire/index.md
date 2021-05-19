---
layout: calculator
title: EWAC questionnaire 
description: Estimate your alcohol consumption using the validated EWAC tool <span class="badge badge-warning">experimental</span>
hide_description: true
disable_anchors: true
---


<div class="container">
    <div class="row">
        <main class="col-12 layout-page__main">
            <!--  <section class="mobile-toc border mb-3 p-3 d-md-none">
                  <div class="d-flex align-items-center">
                      <h2 class="mb-0">Table of Contents</h2>

                      <button
                              class="js-only ml-2 toggle-toc"
                              aria-controls="mobileTOC"
                              aria-label="Toggle table of contents"
                              aria-expanded="true"
                      >
                          <span aria-hidden="true" data-role="toggle">Hide</span>
                      </button>
                  </div>


                  <ul id="mobileTOC" class="js-toc mb-0 mt-2">
                      <li><a href="#how-often-do-you-have-a-drink-containing-alcohol">How often do you have a drink
                          containing alcohol?</a></li>
                      <li><a href="#how-many-units-of-alcohol-do-you-have-on-a-typical-day-when-you-are-drinking">How many
                          units of alcohol do you have on a typical day when you are drinking?</a></li>
                      <li><a href="#how-often-have-you-had-6-or-more-units-on-a-single-occasion-in-the-last-year">How
                          often have you had 6 or more units on a single occasion in the last year?</a>
                          <ul>
                              <li><a href="#results-header">Your results</a></li>
                          </ul>
                      </li>
                  </ul>


              </section>-->

            <section class="scope-markdown questionary_scope">
                <div class="screen1">
                    <p class="lead">To estimate your weekly alcohol consumption, please
                        answer these
                        three questions about the alcohol you have drunk <strong>in the
                            last six months</strong>.
                    </p>
                    <div class="btn-start btn-group mr-2" role="group">
                        <button type="button" class="btn btn-primary">Start</button>
                    </div>
                    <p class="lead notice"><strong>PRIVACY NOTE</strong> 
                     <ul class="lead notice">
                       <li>Responses are anonymous.</li>
                       <li>No data are stored.</li>
                       <li>Responses and results are cleared on form reset or close of browser window.</li>                   
                     </ul>
                     </p>
                </div>
                <div class="questionnaire_steps">
                    <div class="questionnaire_step_navigation">
                        <div class="progress_bar"></div>
                        <div class="btn-group mr-2 btn-group-prev" role="group">
                            <button type="button" class="btn btn-secondary">Previous
                            </button>
                        </div>
                    </div>
                    <div class="questionnaire_step questionnaire_step1">

                        <h2 id="how-often-do-you-have-a-drink-containing-alcohol">How
                            often do you have a
                            drink
                            containing
                            alcohol?</h2>

                        <div id="audit1" class="btn-toolbar" role="toolbar"
                             aria-label="AUDIT-1">
                            <div class="btn-group mr-2" role="group" aria-label="Never">
                                <button type="button" class="btn btn-secondary"
                                        data-value="0" 
                                        data-score="0">Never
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group" aria-label="Monthly">
                                <button type="button" class="btn btn-secondary"
                                        data-value="0.21084"
                                        data-score="1">
                                    Monthly
                                    or less
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group"
                                 aria-label="2-4 per month">
                                <button type="button" class="btn btn-secondary"
                                        data-value="0.57864"
                                        data-score="2">2 to
                                    4 times<br/>per month
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group"
                                 aria-label="2-3 per week">
                                <button type="button" class="btn btn-secondary"
                                        data-value="1.64491"
                                        data-score="3">2 to 3 times<br/>per week
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group"
                                 aria-label="4-5 per week">
                                <button type="button" class="btn btn-secondary"
                                        data-value="3.31438"
                                        data-score="4">4 to 5 times<br/>per week
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group"
                                 aria-label="6+ per week">
                                <button type="button" class="btn btn-secondary"
                                        data-value="5.47534"
                                        data-score="4">6 or more times<br/>per week
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire_step questionnaire_step2">

                        <h2 id="how-many-units-of-alcohol-do-you-have-on-a-typical-day-when-you-are-drinking">
                            How many units of alcohol do you have on a typical day when you are drinking?</h2>

                        <div id="audit2" class="btn-toolbar" role="toolbar"
                             aria-label="AUDIT-2">
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="2.13199"
                                        data-score="0">1 to 2</button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="4.35356"
                                        data-score="1">3 to 4
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="5.60338"
                                        data-score="2">5 to 6
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="6.95035"
                                        data-score="3">7 to 9
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="10.18389"
                                        data-score="4">10 to 12
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="10.85909"
                                        data-score="4">13 to 15
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="15.9719"
                                        data-score="4">16 or more </button>
                            </div>
                        </div>
                        
                        {% include_relative alcohol_key.html %}
                        
                    </div>
                    <div class="questionnaire_step questionnaire_step3">

                        <h2 id="how-often-have-you-had-6-or-more-units-on-a-single-occasion-in-the-last-year">
                            How often
                            have you
                            had 6 or more units on a single occasion in the last
                            year?</h2>

                        <div id="audit3" class="btn-toolbar" role="toolbar"
                             aria-label="AUDIT-3">
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="0.12909"
                                        data-score="0">
                                    Never
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="0.34295"
                                        data-score="1">
                                    Less than monthly
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="0.64481"
                                        data-score="2">
                                    Monthly
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="1.40232"
                                        data-score="3">
                                    Weekly
                                </button>
                            </div>
                            <div class="btn-group mr-2" role="group">
                                <button type="button" class="btn btn-secondary"
                                        data-value="5"
                                        data-score="4">
                                    Daily or almost daily
                                </button>
                            </div>
                        </div>
                        {% include_relative alcohol_key.html %}
                    </div>

                </div>
                <div class="questionnaire_results">

                    <div id="ewac-results-box" class="bd-callout bd-callout-info">
                        <h3 id="results-header">Your results</h3>
                        <p>Your answers suggest you may be consuming an average:</p>
                        <div id="ewac-results" class="d-flex">
                            <div class="p-2 flex-grow-1" align="center"><span
                                    class="results_ukunits">X</span>
                                <span aria-label="units per week">units/week</span>
                            </div>
                            <div class="align-bottom"> or</div>
                            <div class="p-2 flex-grow-1" align="center"><span
                                    class="results_grams">Y</span> <span aria-label="grams per week">g/week</span>
                            </div>
                        </div>
                        <p class="auditc">AUDIT-C score: <span class="results_auditc"></span></p>
                        <div class="btn-reset btn-group mr-2" role="group">
                            <button type="button" class="btn btn-primary">Reset</button>
                        </div>
                    </div>
                    
                    {% include_relative alcohol_key.html %}
                </div>
                
                


            </section>
        </main>

        <!--<aside class="col-md-3 layout-page__sidebar d-none d-md-block hidden-print">

            <nav id="page-toc" class="page-sidebar">


                <ul class="list-unstyled pl-0">
                    <li><a href="#how-often-do-you-have-a-drink-containing-alcohol" class="nav-link px-3 py-1">How often
                        do you have a drink containing alcohol?</a></li>
                    <li><a href="#how-many-units-of-alcohol-do-you-have-on-a-typical-day-when-you-are-drinking"
                           class="nav-link px-3 py-1">How many units of alcohol do you have on a typical day when you
                        are drinking?</a></li>
                    <li><a href="#how-often-have-you-had-6-or-more-units-on-a-single-occasion-in-the-last-year"
                           class="nav-link px-3 py-1">How often have you had 6 or more units on a single occasion in the
                        last year?</a>
                        <ul>
                            <li><a href="#results-header" class="nav-link px-3 py-1">Your results</a></li>
                        </ul>
                    </li>
                </ul>


                <a class="px-3 text-muted" href="#top">
                    <small>Back to top</small>
                </a>
            </nav>


        </aside>-->
    </div>
</div>

