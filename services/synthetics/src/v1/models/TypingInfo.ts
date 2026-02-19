import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Creator } from "./Creator";
import { SLOHistoryResponseErrorWithType } from "./SLOHistoryResponseErrorWithType";
import { SyntheticsAPISubtestStep } from "./SyntheticsAPISubtestStep";
import { SyntheticsAPITest } from "./SyntheticsAPITest";
import { SyntheticsAPITestConfig } from "./SyntheticsAPITestConfig";
import { SyntheticsAPITestResultData } from "./SyntheticsAPITestResultData";
import { SyntheticsAPITestResultFull } from "./SyntheticsAPITestResultFull";
import { SyntheticsAPITestResultFullCheck } from "./SyntheticsAPITestResultFullCheck";
import { SyntheticsAPITestResultShort } from "./SyntheticsAPITestResultShort";
import { SyntheticsAPITestResultShortResult } from "./SyntheticsAPITestResultShortResult";
import { SyntheticsAPITestStep } from "./SyntheticsAPITestStep";
import { SyntheticsAPIWaitStep } from "./SyntheticsAPIWaitStep";
import { SyntheticsApiTestResultFailure } from "./SyntheticsApiTestResultFailure";
import { SyntheticsAssertionBodyHashTarget } from "./SyntheticsAssertionBodyHashTarget";
import { SyntheticsAssertionJSONPathTarget } from "./SyntheticsAssertionJSONPathTarget";
import { SyntheticsAssertionJSONPathTargetTarget } from "./SyntheticsAssertionJSONPathTargetTarget";
import { SyntheticsAssertionJSONSchemaTarget } from "./SyntheticsAssertionJSONSchemaTarget";
import { SyntheticsAssertionJSONSchemaTargetTarget } from "./SyntheticsAssertionJSONSchemaTargetTarget";
import { SyntheticsAssertionJavascript } from "./SyntheticsAssertionJavascript";
import { SyntheticsAssertionTarget } from "./SyntheticsAssertionTarget";
import { SyntheticsAssertionXPathTarget } from "./SyntheticsAssertionXPathTarget";
import { SyntheticsAssertionXPathTargetTarget } from "./SyntheticsAssertionXPathTargetTarget";
import { SyntheticsBasicAuthDigest } from "./SyntheticsBasicAuthDigest";
import { SyntheticsBasicAuthNTLM } from "./SyntheticsBasicAuthNTLM";
import { SyntheticsBasicAuthOauthClient } from "./SyntheticsBasicAuthOauthClient";
import { SyntheticsBasicAuthOauthROP } from "./SyntheticsBasicAuthOauthROP";
import { SyntheticsBasicAuthSigv4 } from "./SyntheticsBasicAuthSigv4";
import { SyntheticsBasicAuthWeb } from "./SyntheticsBasicAuthWeb";
import { SyntheticsBatchDetails } from "./SyntheticsBatchDetails";
import { SyntheticsBatchDetailsData } from "./SyntheticsBatchDetailsData";
import { SyntheticsBatchResult } from "./SyntheticsBatchResult";
import { SyntheticsBrowserError } from "./SyntheticsBrowserError";
import { SyntheticsBrowserTest } from "./SyntheticsBrowserTest";
import { SyntheticsBrowserTestConfig } from "./SyntheticsBrowserTestConfig";
import { SyntheticsBrowserTestResultData } from "./SyntheticsBrowserTestResultData";
import { SyntheticsBrowserTestResultFailure } from "./SyntheticsBrowserTestResultFailure";
import { SyntheticsBrowserTestResultFull } from "./SyntheticsBrowserTestResultFull";
import { SyntheticsBrowserTestResultFullCheck } from "./SyntheticsBrowserTestResultFullCheck";
import { SyntheticsBrowserTestResultShort } from "./SyntheticsBrowserTestResultShort";
import { SyntheticsBrowserTestResultShortResult } from "./SyntheticsBrowserTestResultShortResult";
import { SyntheticsBrowserTestRumSettings } from "./SyntheticsBrowserTestRumSettings";
import { SyntheticsBrowserVariable } from "./SyntheticsBrowserVariable";
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";
import { SyntheticsCIBatchMetadataCI } from "./SyntheticsCIBatchMetadataCI";
import { SyntheticsCIBatchMetadataGit } from "./SyntheticsCIBatchMetadataGit";
import { SyntheticsCIBatchMetadataPipeline } from "./SyntheticsCIBatchMetadataPipeline";
import { SyntheticsCIBatchMetadataProvider } from "./SyntheticsCIBatchMetadataProvider";
import { SyntheticsCITest } from "./SyntheticsCITest";
import { SyntheticsCITestBody } from "./SyntheticsCITestBody";
import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";
import { SyntheticsCoreWebVitals } from "./SyntheticsCoreWebVitals";
import { SyntheticsDeleteTestsPayload } from "./SyntheticsDeleteTestsPayload";
import { SyntheticsDeleteTestsResponse } from "./SyntheticsDeleteTestsResponse";
import { SyntheticsDeletedTest } from "./SyntheticsDeletedTest";
import { SyntheticsDevice } from "./SyntheticsDevice";
import { SyntheticsFetchUptimesPayload } from "./SyntheticsFetchUptimesPayload";
import { SyntheticsGetAPITestLatestResultsResponse } from "./SyntheticsGetAPITestLatestResultsResponse";
import { SyntheticsGetBrowserTestLatestResultsResponse } from "./SyntheticsGetBrowserTestLatestResultsResponse";
import { SyntheticsGlobalVariable } from "./SyntheticsGlobalVariable";
import { SyntheticsGlobalVariableAttributes } from "./SyntheticsGlobalVariableAttributes";
import { SyntheticsGlobalVariableOptions } from "./SyntheticsGlobalVariableOptions";
import { SyntheticsGlobalVariableParseTestOptions } from "./SyntheticsGlobalVariableParseTestOptions";
import { SyntheticsGlobalVariableRequest } from "./SyntheticsGlobalVariableRequest";
import { SyntheticsGlobalVariableTOTPParameters } from "./SyntheticsGlobalVariableTOTPParameters";
import { SyntheticsGlobalVariableValue } from "./SyntheticsGlobalVariableValue";
import { SyntheticsListGlobalVariablesResponse } from "./SyntheticsListGlobalVariablesResponse";
import { SyntheticsListTestsResponse } from "./SyntheticsListTestsResponse";
import { SyntheticsLocation } from "./SyntheticsLocation";
import { SyntheticsLocations } from "./SyntheticsLocations";
import { SyntheticsMobileStep } from "./SyntheticsMobileStep";
import { SyntheticsMobileStepParams } from "./SyntheticsMobileStepParams";
import { SyntheticsMobileStepParamsElement } from "./SyntheticsMobileStepParamsElement";
import { SyntheticsMobileStepParamsElementRelativePosition } from "./SyntheticsMobileStepParamsElementRelativePosition";
import { SyntheticsMobileStepParamsElementUserLocator } from "./SyntheticsMobileStepParamsElementUserLocator";
import { SyntheticsMobileStepParamsElementUserLocatorValuesItems } from "./SyntheticsMobileStepParamsElementUserLocatorValuesItems";
import { SyntheticsMobileStepParamsPositionsItems } from "./SyntheticsMobileStepParamsPositionsItems";
import { SyntheticsMobileStepParamsVariable } from "./SyntheticsMobileStepParamsVariable";
import { SyntheticsMobileTest } from "./SyntheticsMobileTest";
import { SyntheticsMobileTestConfig } from "./SyntheticsMobileTestConfig";
import { SyntheticsMobileTestOptions } from "./SyntheticsMobileTestOptions";
import { SyntheticsMobileTestsMobileApplication } from "./SyntheticsMobileTestsMobileApplication";
import { SyntheticsParsingOptions } from "./SyntheticsParsingOptions";
import { SyntheticsPatchTestBody } from "./SyntheticsPatchTestBody";
import { SyntheticsPatchTestOperation } from "./SyntheticsPatchTestOperation";
import { SyntheticsPrivateLocation } from "./SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponse } from "./SyntheticsPrivateLocationCreationResponse";
import { SyntheticsPrivateLocationCreationResponseResultEncryption } from "./SyntheticsPrivateLocationCreationResponseResultEncryption";
import { SyntheticsPrivateLocationMetadata } from "./SyntheticsPrivateLocationMetadata";
import { SyntheticsPrivateLocationSecrets } from "./SyntheticsPrivateLocationSecrets";
import { SyntheticsPrivateLocationSecretsAuthentication } from "./SyntheticsPrivateLocationSecretsAuthentication";
import { SyntheticsPrivateLocationSecretsConfigDecryption } from "./SyntheticsPrivateLocationSecretsConfigDecryption";
import { SyntheticsSSLCertificate } from "./SyntheticsSSLCertificate";
import { SyntheticsSSLCertificateIssuer } from "./SyntheticsSSLCertificateIssuer";
import { SyntheticsSSLCertificateSubject } from "./SyntheticsSSLCertificateSubject";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsStepDetail } from "./SyntheticsStepDetail";
import { SyntheticsStepDetailWarning } from "./SyntheticsStepDetailWarning";
import { SyntheticsTestCiOptions } from "./SyntheticsTestCiOptions";
import { SyntheticsTestConfig } from "./SyntheticsTestConfig";
import { SyntheticsTestDetails } from "./SyntheticsTestDetails";
import { SyntheticsTestDetailsWithoutSteps } from "./SyntheticsTestDetailsWithoutSteps";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestOptionsMonitorOptions } from "./SyntheticsTestOptionsMonitorOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestOptionsScheduling } from "./SyntheticsTestOptionsScheduling";
import { SyntheticsTestOptionsSchedulingTimeframe } from "./SyntheticsTestOptionsSchedulingTimeframe";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";
import { SyntheticsTestRequestBodyFile } from "./SyntheticsTestRequestBodyFile";
import { SyntheticsTestRequestCertificate } from "./SyntheticsTestRequestCertificate";
import { SyntheticsTestRequestCertificateItem } from "./SyntheticsTestRequestCertificateItem";
import { SyntheticsTestRequestProxy } from "./SyntheticsTestRequestProxy";
import { SyntheticsTestRestrictionPolicyBinding } from "./SyntheticsTestRestrictionPolicyBinding";
import { SyntheticsTestUptime } from "./SyntheticsTestUptime";
import { SyntheticsTiming } from "./SyntheticsTiming";
import { SyntheticsTriggerBody } from "./SyntheticsTriggerBody";
import { SyntheticsTriggerCITestLocation } from "./SyntheticsTriggerCITestLocation";
import { SyntheticsTriggerCITestRunResult } from "./SyntheticsTriggerCITestRunResult";
import { SyntheticsTriggerCITestsResponse } from "./SyntheticsTriggerCITestsResponse";
import { SyntheticsTriggerTest } from "./SyntheticsTriggerTest";
import { SyntheticsUpdateTestPauseStatusPayload } from "./SyntheticsUpdateTestPauseStatusPayload";
import { SyntheticsUptime } from "./SyntheticsUptime";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SyntheticsAPISubtestStepSubtype: ["playSubTest"],
    SyntheticsAPITestStepSubtype: [
      "http",
      "grpc",
      "ssl",
      "dns",
      "tcp",
      "udp",
      "icmp",
      "websocket",
    ],
    SyntheticsAPITestType: ["api"],
    SyntheticsAPIWaitStepSubtype: ["wait"],
    SyntheticsApiTestFailureCode: [
      "BODY_TOO_LARGE",
      "DENIED",
      "TOO_MANY_REDIRECTS",
      "AUTHENTICATION_ERROR",
      "DECRYPTION",
      "INVALID_CHAR_IN_HEADER",
      "HEADER_TOO_LARGE",
      "HEADERS_INCOMPATIBLE_CONTENT_LENGTH",
      "INVALID_REQUEST",
      "REQUIRES_UPDATE",
      "UNESCAPED_CHARACTERS_IN_REQUEST_PATH",
      "MALFORMED_RESPONSE",
      "INCORRECT_ASSERTION",
      "CONNREFUSED",
      "CONNRESET",
      "DNS",
      "HOSTUNREACH",
      "NETUNREACH",
      "TIMEOUT",
      "SSL",
      "OCSP",
      "INVALID_TEST",
      "TUNNEL",
      "WEBSOCKET",
      "UNKNOWN",
      "INTERNAL_ERROR",
    ],
    SyntheticsAssertionBodyHashOperator: ["md5", "sha1", "sha256"],
    SyntheticsAssertionBodyHashType: ["bodyHash"],
    SyntheticsAssertionJSONPathOperator: ["validatesJSONPath"],
    SyntheticsAssertionJSONSchemaMetaSchema: ["draft-07", "draft-06"],
    SyntheticsAssertionJSONSchemaOperator: ["validatesJSONSchema"],
    SyntheticsAssertionJavascriptType: ["javascript"],
    SyntheticsAssertionOperator: [
      "contains",
      "doesNotContain",
      "is",
      "isNot",
      "lessThan",
      "lessThanOrEqual",
      "moreThan",
      "moreThanOrEqual",
      "matches",
      "doesNotMatch",
      "validates",
      "isInMoreThan",
      "isInLessThan",
      "doesNotExist",
      "isUndefined",
    ],
    SyntheticsAssertionTimingsScope: ["all", "withoutDNS"],
    SyntheticsAssertionType: [
      "body",
      "header",
      "statusCode",
      "certificate",
      "responseTime",
      "property",
      "recordEvery",
      "recordSome",
      "tlsVersion",
      "minTlsVersion",
      "latency",
      "packetLossPercentage",
      "packetsReceived",
      "networkHop",
      "receivedMessage",
      "grpcHealthcheckStatus",
      "grpcMetadata",
      "grpcProto",
      "connection",
      "multiNetworkHop",
      "jitter",
    ],
    SyntheticsAssertionXPathOperator: ["validatesXPath"],
    SyntheticsBasicAuthDigestType: ["digest"],
    SyntheticsBasicAuthNTLMType: ["ntlm"],
    SyntheticsBasicAuthOauthClientType: ["oauth-client"],
    SyntheticsBasicAuthOauthROPType: ["oauth-rop"],
    SyntheticsBasicAuthOauthTokenApiAuthentication: ["header", "body"],
    SyntheticsBasicAuthSigv4Type: ["sigv4"],
    SyntheticsBasicAuthWebType: ["web"],
    SyntheticsBatchStatus: ["passed", "skipped", "failed"],
    SyntheticsBrowserErrorType: ["network", "js"],
    SyntheticsBrowserTestFailureCode: [
      "API_REQUEST_FAILURE",
      "ASSERTION_FAILURE",
      "DOWNLOAD_FILE_TOO_LARGE",
      "ELEMENT_NOT_INTERACTABLE",
      "EMAIL_VARIABLE_NOT_DEFINED",
      "EVALUATE_JAVASCRIPT",
      "EVALUATE_JAVASCRIPT_CONTEXT",
      "EXTRACT_VARIABLE",
      "FORBIDDEN_URL",
      "FRAME_DETACHED",
      "INCONSISTENCIES",
      "INTERNAL_ERROR",
      "INVALID_TYPE_TEXT_DELAY",
      "INVALID_URL",
      "INVALID_VARIABLE_PATTERN",
      "INVISIBLE_ELEMENT",
      "LOCATE_ELEMENT",
      "NAVIGATE_TO_LINK",
      "OPEN_URL",
      "PRESS_KEY",
      "SERVER_CERTIFICATE",
      "SELECT_OPTION",
      "STEP_TIMEOUT",
      "SUB_TEST_NOT_PASSED",
      "TEST_TIMEOUT",
      "TOO_MANY_HTTP_REQUESTS",
      "UNAVAILABLE_BROWSER",
      "UNKNOWN",
      "UNSUPPORTED_AUTH_SCHEMA",
      "UPLOAD_FILES_ELEMENT_TYPE",
      "UPLOAD_FILES_DIALOG",
      "UPLOAD_FILES_DYNAMIC_ELEMENT",
      "UPLOAD_FILES_NAME",
    ],
    SyntheticsBrowserTestType: ["browser"],
    SyntheticsBrowserVariableType: ["element", "email", "global", "text"],
    SyntheticsCheckType: [
      "equals",
      "notEquals",
      "contains",
      "notContains",
      "startsWith",
      "notStartsWith",
      "greater",
      "lower",
      "greaterEquals",
      "lowerEquals",
      "matchRegex",
      "between",
      "isEmpty",
      "notIsEmpty",
    ],
    SyntheticsConfigVariableType: ["global", "text", "email"],
    SyntheticsGlobalVariableParseTestOptionsType: [
      "http_body",
      "http_header",
      "http_status_code",
      "local_variable",
    ],
    SyntheticsGlobalVariableParserType: ["raw", "json_path", "regex", "x_path"],
    SyntheticsLocalVariableParsingOptionsType: [
      "grpc_message",
      "grpc_metadata",
      "http_body",
      "http_header",
      "http_status_code",
    ],
    SyntheticsMobileStepParamsDirection: ["up", "down", "left", "right"],
    SyntheticsMobileStepParamsElementContextType: ["native", "web"],
    SyntheticsMobileStepParamsElementUserLocatorValuesItemsType: [
      "accessibility-id",
      "id",
      "ios-predicate-string",
      "ios-class-chain",
      "xpath",
    ],
    SyntheticsMobileStepType: [
      "assertElementContent",
      "assertScreenContains",
      "assertScreenLacks",
      "doubleTap",
      "extractVariable",
      "flick",
      "openDeeplink",
      "playSubTest",
      "pressBack",
      "restartApplication",
      "rotate",
      "scroll",
      "scrollToElement",
      "tap",
      "toggleWiFi",
      "typeText",
      "wait",
    ],
    SyntheticsMobileTestType: ["mobile"],
    SyntheticsMobileTestsMobileApplicationReferenceType: ["latest", "version"],
    SyntheticsPatchTestOperationName: [
      "add",
      "remove",
      "replace",
      "move",
      "copy",
      "test",
    ],
    SyntheticsPlayingTab: [-1, 0, 1, 2, 3],
    SyntheticsStepType: [
      "assertCurrentUrl",
      "assertElementAttribute",
      "assertElementContent",
      "assertElementPresent",
      "assertEmail",
      "assertFileDownload",
      "assertFromJavascript",
      "assertPageContains",
      "assertPageLacks",
      "assertRequests",
      "click",
      "extractFromJavascript",
      "extractFromEmailBody",
      "extractVariable",
      "goToEmailLink",
      "goToUrl",
      "goToUrlAndMeasureTti",
      "hover",
      "playSubTest",
      "pressKey",
      "refresh",
      "runApiTest",
      "scroll",
      "selectOption",
      "typeText",
      "uploadFiles",
      "wait",
    ],
    SyntheticsTestCallType: ["healthcheck", "unary"],
    SyntheticsTestDetailsSubType: [
      "http",
      "ssl",
      "tcp",
      "dns",
      "multi",
      "icmp",
      "udp",
      "websocket",
      "grpc",
    ],
    SyntheticsTestDetailsType: ["api", "browser", "mobile", "network"],
    SyntheticsTestExecutionRule: ["blocking", "non_blocking", "skipped"],
    SyntheticsTestMonitorStatus: [0, 1, 2],
    SyntheticsTestOptionsHTTPVersion: ["http1", "http2", "any"],
    SyntheticsTestOptionsMonitorOptionsNotificationPresetName: [
      "show_all",
      "hide_all",
      "hide_query",
      "hide_handles",
      "hide_query_and_handles",
      "show_only_snapshot",
      "hide_handles_and_footer",
    ],
    SyntheticsTestPauseStatus: ["live", "paused"],
    SyntheticsTestProcessStatus: [
      "not_scheduled",
      "scheduled",
      "finished",
      "finished_with_error",
    ],
    SyntheticsTestRequestBodyType: [
      "text/plain",
      "application/json",
      "text/xml",
      "text/html",
      "application/x-www-form-urlencoded",
      "graphql",
      "application/octet-stream",
      "multipart/form-data",
    ],
    SyntheticsTestRestrictionPolicyBindingRelation: ["editor", "viewer"],
    SyntheticsWarningType: ["user_locator"],
  },
  oneOfMap: {
    SyntheticsAPIStep: [
      "SyntheticsAPITestStep",
      "SyntheticsAPIWaitStep",
      "SyntheticsAPISubtestStep",
    ],
    SyntheticsAssertion: [
      "SyntheticsAssertionTarget",
      "SyntheticsAssertionBodyHashTarget",
      "SyntheticsAssertionJSONPathTarget",
      "SyntheticsAssertionJSONSchemaTarget",
      "SyntheticsAssertionXPathTarget",
      "SyntheticsAssertionJavascript",
    ],
    SyntheticsAssertionTargetValue: ["number", "string"],
    SyntheticsBasicAuth: [
      "SyntheticsBasicAuthWeb",
      "SyntheticsBasicAuthSigv4",
      "SyntheticsBasicAuthNTLM",
      "SyntheticsBasicAuthDigest",
      "SyntheticsBasicAuthOauthClient",
      "SyntheticsBasicAuthOauthROP",
    ],
    SyntheticsMobileStepParamsValue: ["string", "number"],
    SyntheticsTestRequestDNSServerPort: ["number", "string"],
    SyntheticsTestRequestPort: ["number", "string"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Creator: Creator,
    SLOHistoryResponseErrorWithType: SLOHistoryResponseErrorWithType,
    SyntheticsAPISubtestStep: SyntheticsAPISubtestStep,
    SyntheticsAPITest: SyntheticsAPITest,
    SyntheticsAPITestConfig: SyntheticsAPITestConfig,
    SyntheticsAPITestResultData: SyntheticsAPITestResultData,
    SyntheticsAPITestResultFull: SyntheticsAPITestResultFull,
    SyntheticsAPITestResultFullCheck: SyntheticsAPITestResultFullCheck,
    SyntheticsAPITestResultShort: SyntheticsAPITestResultShort,
    SyntheticsAPITestResultShortResult: SyntheticsAPITestResultShortResult,
    SyntheticsAPITestStep: SyntheticsAPITestStep,
    SyntheticsAPIWaitStep: SyntheticsAPIWaitStep,
    SyntheticsApiTestResultFailure: SyntheticsApiTestResultFailure,
    SyntheticsAssertionBodyHashTarget: SyntheticsAssertionBodyHashTarget,
    SyntheticsAssertionJSONPathTarget: SyntheticsAssertionJSONPathTarget,
    SyntheticsAssertionJSONPathTargetTarget:
      SyntheticsAssertionJSONPathTargetTarget,
    SyntheticsAssertionJSONSchemaTarget: SyntheticsAssertionJSONSchemaTarget,
    SyntheticsAssertionJSONSchemaTargetTarget:
      SyntheticsAssertionJSONSchemaTargetTarget,
    SyntheticsAssertionJavascript: SyntheticsAssertionJavascript,
    SyntheticsAssertionTarget: SyntheticsAssertionTarget,
    SyntheticsAssertionXPathTarget: SyntheticsAssertionXPathTarget,
    SyntheticsAssertionXPathTargetTarget: SyntheticsAssertionXPathTargetTarget,
    SyntheticsBasicAuthDigest: SyntheticsBasicAuthDigest,
    SyntheticsBasicAuthNTLM: SyntheticsBasicAuthNTLM,
    SyntheticsBasicAuthOauthClient: SyntheticsBasicAuthOauthClient,
    SyntheticsBasicAuthOauthROP: SyntheticsBasicAuthOauthROP,
    SyntheticsBasicAuthSigv4: SyntheticsBasicAuthSigv4,
    SyntheticsBasicAuthWeb: SyntheticsBasicAuthWeb,
    SyntheticsBatchDetails: SyntheticsBatchDetails,
    SyntheticsBatchDetailsData: SyntheticsBatchDetailsData,
    SyntheticsBatchResult: SyntheticsBatchResult,
    SyntheticsBrowserError: SyntheticsBrowserError,
    SyntheticsBrowserTest: SyntheticsBrowserTest,
    SyntheticsBrowserTestConfig: SyntheticsBrowserTestConfig,
    SyntheticsBrowserTestResultData: SyntheticsBrowserTestResultData,
    SyntheticsBrowserTestResultFailure: SyntheticsBrowserTestResultFailure,
    SyntheticsBrowserTestResultFull: SyntheticsBrowserTestResultFull,
    SyntheticsBrowserTestResultFullCheck: SyntheticsBrowserTestResultFullCheck,
    SyntheticsBrowserTestResultShort: SyntheticsBrowserTestResultShort,
    SyntheticsBrowserTestResultShortResult:
      SyntheticsBrowserTestResultShortResult,
    SyntheticsBrowserTestRumSettings: SyntheticsBrowserTestRumSettings,
    SyntheticsBrowserVariable: SyntheticsBrowserVariable,
    SyntheticsCIBatchMetadata: SyntheticsCIBatchMetadata,
    SyntheticsCIBatchMetadataCI: SyntheticsCIBatchMetadataCI,
    SyntheticsCIBatchMetadataGit: SyntheticsCIBatchMetadataGit,
    SyntheticsCIBatchMetadataPipeline: SyntheticsCIBatchMetadataPipeline,
    SyntheticsCIBatchMetadataProvider: SyntheticsCIBatchMetadataProvider,
    SyntheticsCITest: SyntheticsCITest,
    SyntheticsCITestBody: SyntheticsCITestBody,
    SyntheticsConfigVariable: SyntheticsConfigVariable,
    SyntheticsCoreWebVitals: SyntheticsCoreWebVitals,
    SyntheticsDeleteTestsPayload: SyntheticsDeleteTestsPayload,
    SyntheticsDeleteTestsResponse: SyntheticsDeleteTestsResponse,
    SyntheticsDeletedTest: SyntheticsDeletedTest,
    SyntheticsDevice: SyntheticsDevice,
    SyntheticsFetchUptimesPayload: SyntheticsFetchUptimesPayload,
    SyntheticsGetAPITestLatestResultsResponse:
      SyntheticsGetAPITestLatestResultsResponse,
    SyntheticsGetBrowserTestLatestResultsResponse:
      SyntheticsGetBrowserTestLatestResultsResponse,
    SyntheticsGlobalVariable: SyntheticsGlobalVariable,
    SyntheticsGlobalVariableAttributes: SyntheticsGlobalVariableAttributes,
    SyntheticsGlobalVariableOptions: SyntheticsGlobalVariableOptions,
    SyntheticsGlobalVariableParseTestOptions:
      SyntheticsGlobalVariableParseTestOptions,
    SyntheticsGlobalVariableRequest: SyntheticsGlobalVariableRequest,
    SyntheticsGlobalVariableTOTPParameters:
      SyntheticsGlobalVariableTOTPParameters,
    SyntheticsGlobalVariableValue: SyntheticsGlobalVariableValue,
    SyntheticsListGlobalVariablesResponse:
      SyntheticsListGlobalVariablesResponse,
    SyntheticsListTestsResponse: SyntheticsListTestsResponse,
    SyntheticsLocation: SyntheticsLocation,
    SyntheticsLocations: SyntheticsLocations,
    SyntheticsMobileStep: SyntheticsMobileStep,
    SyntheticsMobileStepParams: SyntheticsMobileStepParams,
    SyntheticsMobileStepParamsElement: SyntheticsMobileStepParamsElement,
    SyntheticsMobileStepParamsElementRelativePosition:
      SyntheticsMobileStepParamsElementRelativePosition,
    SyntheticsMobileStepParamsElementUserLocator:
      SyntheticsMobileStepParamsElementUserLocator,
    SyntheticsMobileStepParamsElementUserLocatorValuesItems:
      SyntheticsMobileStepParamsElementUserLocatorValuesItems,
    SyntheticsMobileStepParamsPositionsItems:
      SyntheticsMobileStepParamsPositionsItems,
    SyntheticsMobileStepParamsVariable: SyntheticsMobileStepParamsVariable,
    SyntheticsMobileTest: SyntheticsMobileTest,
    SyntheticsMobileTestConfig: SyntheticsMobileTestConfig,
    SyntheticsMobileTestOptions: SyntheticsMobileTestOptions,
    SyntheticsMobileTestsMobileApplication:
      SyntheticsMobileTestsMobileApplication,
    SyntheticsParsingOptions: SyntheticsParsingOptions,
    SyntheticsPatchTestBody: SyntheticsPatchTestBody,
    SyntheticsPatchTestOperation: SyntheticsPatchTestOperation,
    SyntheticsPrivateLocation: SyntheticsPrivateLocation,
    SyntheticsPrivateLocationCreationResponse:
      SyntheticsPrivateLocationCreationResponse,
    SyntheticsPrivateLocationCreationResponseResultEncryption:
      SyntheticsPrivateLocationCreationResponseResultEncryption,
    SyntheticsPrivateLocationMetadata: SyntheticsPrivateLocationMetadata,
    SyntheticsPrivateLocationSecrets: SyntheticsPrivateLocationSecrets,
    SyntheticsPrivateLocationSecretsAuthentication:
      SyntheticsPrivateLocationSecretsAuthentication,
    SyntheticsPrivateLocationSecretsConfigDecryption:
      SyntheticsPrivateLocationSecretsConfigDecryption,
    SyntheticsSSLCertificate: SyntheticsSSLCertificate,
    SyntheticsSSLCertificateIssuer: SyntheticsSSLCertificateIssuer,
    SyntheticsSSLCertificateSubject: SyntheticsSSLCertificateSubject,
    SyntheticsStep: SyntheticsStep,
    SyntheticsStepDetail: SyntheticsStepDetail,
    SyntheticsStepDetailWarning: SyntheticsStepDetailWarning,
    SyntheticsTestCiOptions: SyntheticsTestCiOptions,
    SyntheticsTestConfig: SyntheticsTestConfig,
    SyntheticsTestDetails: SyntheticsTestDetails,
    SyntheticsTestDetailsWithoutSteps: SyntheticsTestDetailsWithoutSteps,
    SyntheticsTestOptions: SyntheticsTestOptions,
    SyntheticsTestOptionsMonitorOptions: SyntheticsTestOptionsMonitorOptions,
    SyntheticsTestOptionsRetry: SyntheticsTestOptionsRetry,
    SyntheticsTestOptionsScheduling: SyntheticsTestOptionsScheduling,
    SyntheticsTestOptionsSchedulingTimeframe:
      SyntheticsTestOptionsSchedulingTimeframe,
    SyntheticsTestRequest: SyntheticsTestRequest,
    SyntheticsTestRequestBodyFile: SyntheticsTestRequestBodyFile,
    SyntheticsTestRequestCertificate: SyntheticsTestRequestCertificate,
    SyntheticsTestRequestCertificateItem: SyntheticsTestRequestCertificateItem,
    SyntheticsTestRequestProxy: SyntheticsTestRequestProxy,
    SyntheticsTestRestrictionPolicyBinding:
      SyntheticsTestRestrictionPolicyBinding,
    SyntheticsTestUptime: SyntheticsTestUptime,
    SyntheticsTiming: SyntheticsTiming,
    SyntheticsTriggerBody: SyntheticsTriggerBody,
    SyntheticsTriggerCITestLocation: SyntheticsTriggerCITestLocation,
    SyntheticsTriggerCITestRunResult: SyntheticsTriggerCITestRunResult,
    SyntheticsTriggerCITestsResponse: SyntheticsTriggerCITestsResponse,
    SyntheticsTriggerTest: SyntheticsTriggerTest,
    SyntheticsUpdateTestPauseStatusPayload:
      SyntheticsUpdateTestPauseStatusPayload,
    SyntheticsUptime: SyntheticsUptime,
    SyntheticsVariableParser: SyntheticsVariableParser,
  },
};
