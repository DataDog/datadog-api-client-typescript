import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  logger,
} from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Creator } from "./Creator";
import { SLOHistoryResponseErrorWithType } from "./SLOHistoryResponseErrorWithType";
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

const primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
];

const ARRAY_PREFIX = "Array<";
const MAP_PREFIX = "{ [key: string]: ";
const TUPLE_PREFIX = "[";

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0,
};

const enumsMap: { [key: string]: any[] } = {
  SyntheticsAPITestStepSubtype: ["http", "grpc"],
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
  SyntheticsTestDetailsType: ["api", "browser", "mobile"],
  SyntheticsTestExecutionRule: ["blocking", "non_blocking", "skipped"],
  SyntheticsTestMonitorStatus: [0, 1, 2],
  SyntheticsTestOptionsHTTPVersion: ["http1", "http2", "any"],
  SyntheticsTestOptionsMonitorOptionsNotificationPresetName: [
    "show_all",
    "hide_all",
    "hide_query",
    "hide_handles",
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
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  Creator: Creator,
  SLOHistoryResponseErrorWithType: SLOHistoryResponseErrorWithType,
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
  SyntheticsListGlobalVariablesResponse: SyntheticsListGlobalVariablesResponse,
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
};

const oneOfMap: { [index: string]: string[] } = {
  SyntheticsAPIStep: ["SyntheticsAPITestStep", "SyntheticsAPIWaitStep"],
  SyntheticsAssertion: [
    "SyntheticsAssertionTarget",
    "SyntheticsAssertionBodyHashTarget",
    "SyntheticsAssertionJSONPathTarget",
    "SyntheticsAssertionJSONSchemaTarget",
    "SyntheticsAssertionXPathTarget",
    "SyntheticsAssertionJavascript",
  ],
  SyntheticsBasicAuth: [
    "SyntheticsBasicAuthWeb",
    "SyntheticsBasicAuthSigv4",
    "SyntheticsBasicAuthNTLM",
    "SyntheticsBasicAuthDigest",
    "SyntheticsBasicAuthOauthClient",
    "SyntheticsBasicAuthOauthROP",
  ],
  SyntheticsMobileStepParamsValue: ["string", "number"],
  SyntheticsTestRequestPort: ["number", "string"],
};

export class ObjectSerializer {
  public static serialize(data: any, type: string, format: string): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (data instanceof UnparsedObject) {
      return data._data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // We only support homegeneus tuples
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.serialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      if ("string" == typeof data) {
        return data;
      }
      if (format == "date" || format == "date-time") {
        return dateToRFC3339String(data);
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        throw new TypeError(`unknown enum value '${data}'`);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
          } catch (e) {
            logger.debug(`could not serialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length > 1) {
          throw new TypeError(
            `${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        if (oneOfs.length == 0) {
          throw new TypeError(
            `${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      // get the map for the correct type.
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};

      for (const attributeName in data) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeName === "_unparsed" ||
          attributeName === "additionalProperties"
        ) {
          continue;
        } else if (
          attributeObj === undefined &&
          !("additionalProperties" in attributesMap)
        ) {
          throw new Error(
            "unexpected attribute " + attributeName + " of type " + type,
          );
        } else if (attributeObj) {
          instance[attributeObj.baseName] = ObjectSerializer.serialize(
            data[attributeName],
            attributeObj.type,
            attributeObj.format,
          );
        }
      }

      if (data.additionalProperties) {
        const additionalPropertiesMap = attributesMap["additionalProperties"];
        if (additionalPropertiesMap) {
          const additionalProperties = ObjectSerializer.serialize(
            data.additionalProperties,
            additionalPropertiesMap.type,
            additionalPropertiesMap.format,
          );
          for (const key in additionalProperties) {
            instance[key] = additionalProperties[key];
          }
        } else {
          throw new Error(`additionalProperties found in ${type}`);
        }
      }

      // check for required properties
      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeObj?.required &&
          instance[attributeObj.baseName] === undefined
        ) {
          throw new Error(
            `missing required property '${attributeObj.baseName}'`,
          );
        }
      }

      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string = ""): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      // Assert the passed data is Array type
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // [Type,...] => Type
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.deserialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      try {
        return dateFromRFC3339String(data);
      } catch {
        return new Date(data);
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        return new UnparsedObject(data);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            const d = ObjectSerializer.deserialize(data, oneOf, format);
            if (!d?._unparsed) {
              oneOfs.push(d);
            }
          } catch (e) {
            logger.debug(`could not deserialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length != 1) {
          return new UnparsedObject(data);
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      const instance = new typeMap[type]();
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const attributesBaseNames = Object.keys(attributesMap).reduce(
        (o, key) => Object.assign(o, { [attributesMap[key].baseName]: "" }),
        {},
      );
      const extraAttributes = Object.keys(data).filter(
        (key) =>
          !Object.prototype.hasOwnProperty.call(attributesBaseNames, key),
      );

      if (extraAttributes.length > 0) {
        if ("additionalProperties" in attributesMap) {
          if (!instance.additionalProperties) {
            instance.additionalProperties = {};
          }

          const additionalProperties: { [key: string]: any } = {};
          for (const key of extraAttributes) {
            additionalProperties[key] = data[key];
          }

          const attributeObj = attributesMap["additionalProperties"];
          instance.additionalProperties = ObjectSerializer.deserialize(
            additionalProperties,
            attributeObj.type,
            attributeObj.format,
          );
        } else {
          throw new Error(
            `found extra attributes '${extraAttributes}' in ${type}`,
          );
        }
      }

      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (attributeName === "additionalProperties") {
          continue;
        }

        instance[attributeName] = ObjectSerializer.deserialize(
          data[attributeObj.baseName],
          attributeObj.type,
          attributeObj.format,
        );

        // check for required properties
        if (attributeObj?.required && instance[attributeName] === undefined) {
          throw new Error(`missing required property '${attributeName}'`);
        }

        if (
          instance[attributeName] instanceof UnparsedObject ||
          instance[attributeName]?._unparsed
        ) {
          instance._unparsed = true;
        }

        if (Array.isArray(instance[attributeName])) {
          for (const d of instance[attributeName]) {
            if (d instanceof UnparsedObject || d?._unparsed) {
              instance._unparsed = true;
              break;
            }
          }
        }
      }

      return instance;
    }
  }

  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(
    mediaType: string | undefined,
  ): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(";")[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return "application/json";
    }

    const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank: number = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (mediaType === undefined) {
        continue;
      }
      const supported = supportedMediaTypes[mediaType];
      if (supported !== undefined && supported > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supported;
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        "None of the given media types are supported: " + mediaTypes.join(", "),
      );
    }

    return selectedMediaType;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === "application/json" || mediaType === "text/json") {
      return JSON.stringify(data);
    }

    throw new Error(
      "The mediaType " +
        mediaType +
        " is not supported by ObjectSerializer.stringify.",
    );
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined): any {
    try {
      return JSON.parse(rawData);
    } catch (error) {
      logger.debug(`could not parse ${mediaType}: ${error}`);
      return rawData;
    }
  }
}
