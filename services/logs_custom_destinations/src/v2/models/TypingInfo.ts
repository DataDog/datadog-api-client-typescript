import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CustomDestinationCreateRequest } from "./CustomDestinationCreateRequest";
import { CustomDestinationCreateRequestAttributes } from "./CustomDestinationCreateRequestAttributes";
import { CustomDestinationCreateRequestDefinition } from "./CustomDestinationCreateRequestDefinition";
import { CustomDestinationElasticsearchDestinationAuth } from "./CustomDestinationElasticsearchDestinationAuth";
import { CustomDestinationForwardDestinationElasticsearch } from "./CustomDestinationForwardDestinationElasticsearch";
import { CustomDestinationForwardDestinationGoogleSecurityOperations } from "./CustomDestinationForwardDestinationGoogleSecurityOperations";
import { CustomDestinationForwardDestinationHttp } from "./CustomDestinationForwardDestinationHttp";
import { CustomDestinationForwardDestinationMicrosoftSentinel } from "./CustomDestinationForwardDestinationMicrosoftSentinel";
import { CustomDestinationForwardDestinationSplunk } from "./CustomDestinationForwardDestinationSplunk";
import { CustomDestinationGoogleSecurityOperationsDestinationAuth } from "./CustomDestinationGoogleSecurityOperationsDestinationAuth";
import { CustomDestinationHttpDestinationAuthBasic } from "./CustomDestinationHttpDestinationAuthBasic";
import { CustomDestinationHttpDestinationAuthCustomHeader } from "./CustomDestinationHttpDestinationAuthCustomHeader";
import { CustomDestinationResponse } from "./CustomDestinationResponse";
import { CustomDestinationResponseAttributes } from "./CustomDestinationResponseAttributes";
import { CustomDestinationResponseDefinition } from "./CustomDestinationResponseDefinition";
import { CustomDestinationResponseForwardDestinationElasticsearch } from "./CustomDestinationResponseForwardDestinationElasticsearch";
import { CustomDestinationResponseForwardDestinationGoogleSecurityOperations } from "./CustomDestinationResponseForwardDestinationGoogleSecurityOperations";
import { CustomDestinationResponseForwardDestinationHttp } from "./CustomDestinationResponseForwardDestinationHttp";
import { CustomDestinationResponseForwardDestinationMicrosoftSentinel } from "./CustomDestinationResponseForwardDestinationMicrosoftSentinel";
import { CustomDestinationResponseForwardDestinationSplunk } from "./CustomDestinationResponseForwardDestinationSplunk";
import { CustomDestinationResponseGoogleSecurityOperationsDestinationAuth } from "./CustomDestinationResponseGoogleSecurityOperationsDestinationAuth";
import { CustomDestinationResponseHttpDestinationAuthBasic } from "./CustomDestinationResponseHttpDestinationAuthBasic";
import { CustomDestinationResponseHttpDestinationAuthCustomHeader } from "./CustomDestinationResponseHttpDestinationAuthCustomHeader";
import { CustomDestinationUpdateRequest } from "./CustomDestinationUpdateRequest";
import { CustomDestinationUpdateRequestAttributes } from "./CustomDestinationUpdateRequestAttributes";
import { CustomDestinationUpdateRequestDefinition } from "./CustomDestinationUpdateRequestDefinition";
import { CustomDestinationsResponse } from "./CustomDestinationsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CustomDestinationAttributeTagsRestrictionListType: [
      "ALLOW_LIST",
      "BLOCK_LIST",
    ],
    CustomDestinationForwardDestinationElasticsearchType: ["elasticsearch"],
    CustomDestinationForwardDestinationGoogleSecurityOperationsType: [
      "google_security_operations",
    ],
    CustomDestinationForwardDestinationHttpType: ["http"],
    CustomDestinationForwardDestinationMicrosoftSentinelType: [
      "microsoft_sentinel",
    ],
    CustomDestinationForwardDestinationSplunkType: ["splunk_hec"],
    CustomDestinationGoogleSecurityOperationsDestinationAuthType: [
      "gcp_private_key",
    ],
    CustomDestinationHttpDestinationAuthBasicType: ["basic"],
    CustomDestinationHttpDestinationAuthCustomHeaderType: ["custom_header"],
    CustomDestinationResponseForwardDestinationElasticsearchType: [
      "elasticsearch",
    ],
    CustomDestinationResponseForwardDestinationGoogleSecurityOperationsType: [
      "google_security_operations",
    ],
    CustomDestinationResponseForwardDestinationHttpType: ["http"],
    CustomDestinationResponseForwardDestinationMicrosoftSentinelType: [
      "microsoft_sentinel",
    ],
    CustomDestinationResponseForwardDestinationSplunkType: ["splunk_hec"],
    CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType: [
      "gcp_private_key",
    ],
    CustomDestinationResponseHttpDestinationAuthBasicType: ["basic"],
    CustomDestinationResponseHttpDestinationAuthCustomHeaderType: [
      "custom_header",
    ],
    CustomDestinationType: ["custom_destination"],
  },
  oneOfMap: {
    CustomDestinationForwardDestination: [
      "CustomDestinationForwardDestinationHttp",
      "CustomDestinationForwardDestinationSplunk",
      "CustomDestinationForwardDestinationElasticsearch",
      "CustomDestinationForwardDestinationMicrosoftSentinel",
      "CustomDestinationForwardDestinationGoogleSecurityOperations",
    ],
    CustomDestinationHttpDestinationAuth: [
      "CustomDestinationHttpDestinationAuthBasic",
      "CustomDestinationHttpDestinationAuthCustomHeader",
    ],
    CustomDestinationResponseForwardDestination: [
      "CustomDestinationResponseForwardDestinationHttp",
      "CustomDestinationResponseForwardDestinationSplunk",
      "CustomDestinationResponseForwardDestinationElasticsearch",
      "CustomDestinationResponseForwardDestinationMicrosoftSentinel",
      "CustomDestinationResponseForwardDestinationGoogleSecurityOperations",
    ],
    CustomDestinationResponseHttpDestinationAuth: [
      "CustomDestinationResponseHttpDestinationAuthBasic",
      "CustomDestinationResponseHttpDestinationAuthCustomHeader",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CustomDestinationCreateRequest: CustomDestinationCreateRequest,
    CustomDestinationCreateRequestAttributes:
      CustomDestinationCreateRequestAttributes,
    CustomDestinationCreateRequestDefinition:
      CustomDestinationCreateRequestDefinition,
    CustomDestinationElasticsearchDestinationAuth:
      CustomDestinationElasticsearchDestinationAuth,
    CustomDestinationForwardDestinationElasticsearch:
      CustomDestinationForwardDestinationElasticsearch,
    CustomDestinationForwardDestinationGoogleSecurityOperations:
      CustomDestinationForwardDestinationGoogleSecurityOperations,
    CustomDestinationForwardDestinationHttp:
      CustomDestinationForwardDestinationHttp,
    CustomDestinationForwardDestinationMicrosoftSentinel:
      CustomDestinationForwardDestinationMicrosoftSentinel,
    CustomDestinationForwardDestinationSplunk:
      CustomDestinationForwardDestinationSplunk,
    CustomDestinationGoogleSecurityOperationsDestinationAuth:
      CustomDestinationGoogleSecurityOperationsDestinationAuth,
    CustomDestinationHttpDestinationAuthBasic:
      CustomDestinationHttpDestinationAuthBasic,
    CustomDestinationHttpDestinationAuthCustomHeader:
      CustomDestinationHttpDestinationAuthCustomHeader,
    CustomDestinationResponse: CustomDestinationResponse,
    CustomDestinationResponseAttributes: CustomDestinationResponseAttributes,
    CustomDestinationResponseDefinition: CustomDestinationResponseDefinition,
    CustomDestinationResponseForwardDestinationElasticsearch:
      CustomDestinationResponseForwardDestinationElasticsearch,
    CustomDestinationResponseForwardDestinationGoogleSecurityOperations:
      CustomDestinationResponseForwardDestinationGoogleSecurityOperations,
    CustomDestinationResponseForwardDestinationHttp:
      CustomDestinationResponseForwardDestinationHttp,
    CustomDestinationResponseForwardDestinationMicrosoftSentinel:
      CustomDestinationResponseForwardDestinationMicrosoftSentinel,
    CustomDestinationResponseForwardDestinationSplunk:
      CustomDestinationResponseForwardDestinationSplunk,
    CustomDestinationResponseGoogleSecurityOperationsDestinationAuth:
      CustomDestinationResponseGoogleSecurityOperationsDestinationAuth,
    CustomDestinationResponseHttpDestinationAuthBasic:
      CustomDestinationResponseHttpDestinationAuthBasic,
    CustomDestinationResponseHttpDestinationAuthCustomHeader:
      CustomDestinationResponseHttpDestinationAuthCustomHeader,
    CustomDestinationUpdateRequest: CustomDestinationUpdateRequest,
    CustomDestinationUpdateRequestAttributes:
      CustomDestinationUpdateRequestAttributes,
    CustomDestinationUpdateRequestDefinition:
      CustomDestinationUpdateRequestDefinition,
    CustomDestinationsResponse: CustomDestinationsResponse,
  },
};
