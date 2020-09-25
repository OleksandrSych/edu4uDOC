'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@edu4u/backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-ecbff654bf5a703815d474595f9fc456"' : 'data-target="#xs-controllers-links-module-AppModule-ecbff654bf5a703815d474595f9fc456"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ecbff654bf5a703815d474595f9fc456"' :
                                            'id="xs-controllers-links-module-AppModule-ecbff654bf5a703815d474595f9fc456"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-6a3b981f42f22f6b3655d8c039b6cef1"' : 'data-target="#xs-injectables-links-module-AuthModule-6a3b981f42f22f6b3655d8c039b6cef1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6a3b981f42f22f6b3655d8c039b6cef1"' :
                                        'id="xs-injectables-links-module-AuthModule-6a3b981f42f22f6b3655d8c039b6cef1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link">CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CoursesModule-70fd809f33200cfb47326b1b10d6af14"' : 'data-target="#xs-controllers-links-module-CoursesModule-70fd809f33200cfb47326b1b10d6af14"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoursesModule-70fd809f33200cfb47326b1b10d6af14"' :
                                            'id="xs-controllers-links-module-CoursesModule-70fd809f33200cfb47326b1b10d6af14"' }>
                                            <li class="link">
                                                <a href="controllers/CoursesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoursesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoursesModule-70fd809f33200cfb47326b1b10d6af14"' : 'data-target="#xs-injectables-links-module-CoursesModule-70fd809f33200cfb47326b1b10d6af14"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-70fd809f33200cfb47326b1b10d6af14"' :
                                        'id="xs-injectables-links-module-CoursesModule-70fd809f33200cfb47326b1b10d6af14"' }>
                                        <li class="link">
                                            <a href="injectables/CoursesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CoursesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InviteUserModule.html" data-type="entity-link">InviteUserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-InviteUserModule-0bf9f67237aab0f03b9e5754f604f60b"' : 'data-target="#xs-controllers-links-module-InviteUserModule-0bf9f67237aab0f03b9e5754f604f60b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InviteUserModule-0bf9f67237aab0f03b9e5754f604f60b"' :
                                            'id="xs-controllers-links-module-InviteUserModule-0bf9f67237aab0f03b9e5754f604f60b"' }>
                                            <li class="link">
                                                <a href="controllers/InviteUserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InviteUserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InviteUserModule-0bf9f67237aab0f03b9e5754f604f60b"' : 'data-target="#xs-injectables-links-module-InviteUserModule-0bf9f67237aab0f03b9e5754f604f60b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InviteUserModule-0bf9f67237aab0f03b9e5754f604f60b"' :
                                        'id="xs-injectables-links-module-InviteUserModule-0bf9f67237aab0f03b9e5754f604f60b"' }>
                                        <li class="link">
                                            <a href="injectables/InviteUserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InviteUserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailerEdu4uModule.html" data-type="entity-link">MailerEdu4uModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MailerEdu4uModule-41aa23817b77dbfaa494c4d68f662a46"' : 'data-target="#xs-injectables-links-module-MailerEdu4uModule-41aa23817b77dbfaa494c4d68f662a46"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailerEdu4uModule-41aa23817b77dbfaa494c4d68f662a46"' :
                                        'id="xs-injectables-links-module-MailerEdu4uModule-41aa23817b77dbfaa494c4d68f662a46"' }>
                                        <li class="link">
                                            <a href="injectables/MailerEdu4uService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MailerEdu4uService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeachersModule.html" data-type="entity-link">TeachersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TeachersModule-9db1c7a1bca72cc3c8f054e111bac200"' : 'data-target="#xs-controllers-links-module-TeachersModule-9db1c7a1bca72cc3c8f054e111bac200"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeachersModule-9db1c7a1bca72cc3c8f054e111bac200"' :
                                            'id="xs-controllers-links-module-TeachersModule-9db1c7a1bca72cc3c8f054e111bac200"' }>
                                            <li class="link">
                                                <a href="controllers/TeachersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TeachersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeachersModule-9db1c7a1bca72cc3c8f054e111bac200"' : 'data-target="#xs-injectables-links-module-TeachersModule-9db1c7a1bca72cc3c8f054e111bac200"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeachersModule-9db1c7a1bca72cc3c8f054e111bac200"' :
                                        'id="xs-injectables-links-module-TeachersModule-9db1c7a1bca72cc3c8f054e111bac200"' }>
                                        <li class="link">
                                            <a href="injectables/TeachersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TeachersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UniversitiesModule.html" data-type="entity-link">UniversitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UniversitiesModule-48f9f48c5dd17680a0dc8fa0ebf0fbd7"' : 'data-target="#xs-controllers-links-module-UniversitiesModule-48f9f48c5dd17680a0dc8fa0ebf0fbd7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UniversitiesModule-48f9f48c5dd17680a0dc8fa0ebf0fbd7"' :
                                            'id="xs-controllers-links-module-UniversitiesModule-48f9f48c5dd17680a0dc8fa0ebf0fbd7"' }>
                                            <li class="link">
                                                <a href="controllers/UniversitiesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UniversitiesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UniversitiesModule-48f9f48c5dd17680a0dc8fa0ebf0fbd7"' : 'data-target="#xs-injectables-links-module-UniversitiesModule-48f9f48c5dd17680a0dc8fa0ebf0fbd7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UniversitiesModule-48f9f48c5dd17680a0dc8fa0ebf0fbd7"' :
                                        'id="xs-injectables-links-module-UniversitiesModule-48f9f48c5dd17680a0dc8fa0ebf0fbd7"' }>
                                        <li class="link">
                                            <a href="injectables/UniversitiesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UniversitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-04c661974393c2ff37461b5d8cc382f2"' : 'data-target="#xs-injectables-links-module-UsersModule-04c661974393c2ff37461b5d8cc382f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-04c661974393c2ff37461b5d8cc382f2"' :
                                        'id="xs-injectables-links-module-UsersModule-04c661974393c2ff37461b5d8cc382f2"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCourseDTO.html" data-type="entity-link">CreateCourseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNodeDTO.html" data-type="entity-link">CreateNodeDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link">CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/InviteUserDTO.html" data-type="entity-link">InviteUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDTO.html" data-type="entity-link">UserLoginDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidateObjectId.html" data-type="entity-link">ValidateObjectId</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Course.html" data-type="entity-link">Course</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Node.html" data-type="entity-link">Node</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});