import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ChangeRequestBranchCreateAttributes } from "./ChangeRequestBranchCreateAttributes";
import { ChangeRequestBranchCreateData } from "./ChangeRequestBranchCreateData";
import { ChangeRequestBranchCreateRequest } from "./ChangeRequestBranchCreateRequest";
import { ChangeRequestCreateAttributes } from "./ChangeRequestCreateAttributes";
import { ChangeRequestCreateData } from "./ChangeRequestCreateData";
import { ChangeRequestCreateRequest } from "./ChangeRequestCreateRequest";
import { ChangeRequestDecisionCreateAttributes } from "./ChangeRequestDecisionCreateAttributes";
import { ChangeRequestDecisionCreateItem } from "./ChangeRequestDecisionCreateItem";
import { ChangeRequestDecisionCreateRelationships } from "./ChangeRequestDecisionCreateRelationships";
import { ChangeRequestDecisionRelationshipData } from "./ChangeRequestDecisionRelationshipData";
import { ChangeRequestDecisionRelationships } from "./ChangeRequestDecisionRelationships";
import { ChangeRequestDecisionResponseAttributes } from "./ChangeRequestDecisionResponseAttributes";
import { ChangeRequestDecisionUpdateData } from "./ChangeRequestDecisionUpdateData";
import { ChangeRequestDecisionUpdateDataAttributes } from "./ChangeRequestDecisionUpdateDataAttributes";
import { ChangeRequestDecisionUpdateDataRelationships } from "./ChangeRequestDecisionUpdateDataRelationships";
import { ChangeRequestDecisionUpdateRequest } from "./ChangeRequestDecisionUpdateRequest";
import { ChangeRequestDecisionsRelationship } from "./ChangeRequestDecisionsRelationship";
import { ChangeRequestIncludedDecision } from "./ChangeRequestIncludedDecision";
import { ChangeRequestIncludedUser } from "./ChangeRequestIncludedUser";
import { ChangeRequestIncludedUserAttributes } from "./ChangeRequestIncludedUserAttributes";
import { ChangeRequestRelationships } from "./ChangeRequestRelationships";
import { ChangeRequestResponse } from "./ChangeRequestResponse";
import { ChangeRequestResponseAttributes } from "./ChangeRequestResponseAttributes";
import { ChangeRequestResponseData } from "./ChangeRequestResponseData";
import { ChangeRequestUpdateAttributes } from "./ChangeRequestUpdateAttributes";
import { ChangeRequestUpdateData } from "./ChangeRequestUpdateData";
import { ChangeRequestUpdateRelationships } from "./ChangeRequestUpdateRelationships";
import { ChangeRequestUpdateRequest } from "./ChangeRequestUpdateRequest";
import { ChangeRequestUserRelationship } from "./ChangeRequestUserRelationship";
import { ChangeRequestUserRelationshipData } from "./ChangeRequestUserRelationshipData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ChangeRequestBranchResourceType: ["change_request_branch"],
    ChangeRequestChangeType: ["NORMAL", "STANDARD", "EMERGENCY"],
    ChangeRequestDecisionResourceType: ["change_request_decision"],
    ChangeRequestDecisionStatusType: ["REQUESTED", "APPROVED", "DECLINED"],
    ChangeRequestResourceType: ["change_request"],
    ChangeRequestRiskLevel: ["UNDEFINED", "LOW", "MEDIUM", "HIGH"],
  },
  oneOfMap: {
    ChangeRequestIncludedItem: [
      "ChangeRequestIncludedUser",
      "ChangeRequestIncludedDecision",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ChangeRequestBranchCreateAttributes: ChangeRequestBranchCreateAttributes,
    ChangeRequestBranchCreateData: ChangeRequestBranchCreateData,
    ChangeRequestBranchCreateRequest: ChangeRequestBranchCreateRequest,
    ChangeRequestCreateAttributes: ChangeRequestCreateAttributes,
    ChangeRequestCreateData: ChangeRequestCreateData,
    ChangeRequestCreateRequest: ChangeRequestCreateRequest,
    ChangeRequestDecisionCreateAttributes:
      ChangeRequestDecisionCreateAttributes,
    ChangeRequestDecisionCreateItem: ChangeRequestDecisionCreateItem,
    ChangeRequestDecisionCreateRelationships:
      ChangeRequestDecisionCreateRelationships,
    ChangeRequestDecisionRelationshipData:
      ChangeRequestDecisionRelationshipData,
    ChangeRequestDecisionRelationships: ChangeRequestDecisionRelationships,
    ChangeRequestDecisionResponseAttributes:
      ChangeRequestDecisionResponseAttributes,
    ChangeRequestDecisionUpdateData: ChangeRequestDecisionUpdateData,
    ChangeRequestDecisionUpdateDataAttributes:
      ChangeRequestDecisionUpdateDataAttributes,
    ChangeRequestDecisionUpdateDataRelationships:
      ChangeRequestDecisionUpdateDataRelationships,
    ChangeRequestDecisionUpdateRequest: ChangeRequestDecisionUpdateRequest,
    ChangeRequestDecisionsRelationship: ChangeRequestDecisionsRelationship,
    ChangeRequestIncludedDecision: ChangeRequestIncludedDecision,
    ChangeRequestIncludedUser: ChangeRequestIncludedUser,
    ChangeRequestIncludedUserAttributes: ChangeRequestIncludedUserAttributes,
    ChangeRequestRelationships: ChangeRequestRelationships,
    ChangeRequestResponse: ChangeRequestResponse,
    ChangeRequestResponseAttributes: ChangeRequestResponseAttributes,
    ChangeRequestResponseData: ChangeRequestResponseData,
    ChangeRequestUpdateAttributes: ChangeRequestUpdateAttributes,
    ChangeRequestUpdateData: ChangeRequestUpdateData,
    ChangeRequestUpdateRelationships: ChangeRequestUpdateRelationships,
    ChangeRequestUpdateRequest: ChangeRequestUpdateRequest,
    ChangeRequestUserRelationship: ChangeRequestUserRelationship,
    ChangeRequestUserRelationshipData: ChangeRequestUserRelationshipData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
