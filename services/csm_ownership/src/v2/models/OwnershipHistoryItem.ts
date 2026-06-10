import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipInferenceStatus } from "./OwnershipInferenceStatus";
import { OwnershipOwnerType } from "./OwnershipOwnerType";

/**
 * A single ownership inference history entry.
 */
export class OwnershipHistoryItem {
  /**
   * A checksum identifying the state of the inference at this point in time.
   */
  "checksum": string;
  /**
   * The confidence score of the inference, expressed as a numeric string with up to four decimal places.
   */
  "confidence": string;
  /**
   * The time this history entry was created.
   */
  "createdAt": Date;
  /**
   * The list of evidence versions associated with an inference.
   */
  "evidenceVersions": Array<{ [key: string]: any }> | null;
  /**
   * A human-readable explanation of how the inference was produced.
   */
  "explanation": string;
  /**
   * The time when this inference failed, if applicable.
   */
  "failedAt"?: Date;
  /**
   * The reason why this inference failed, if applicable.
   */
  "failureReason"?: string;
  /**
   * The unique identifier of the history entry.
   */
  "id": number;
  /**
   * The owner type for an ownership inference.
   */
  "ownerType": OwnershipOwnerType;
  /**
   * The primary contact reference for the inferred owner, formatted as `ref:handle/<owner_handle>`.
   */
  "primaryContactRef"?: string;
  /**
   * The identifier of the resource that the inference applies to.
   */
  "resourceId": string;
  /**
   * The scheduled retry time for a failed inference, if applicable.
   */
  "retrySchedule"?: Date;
  /**
   * The list of sources backing an ownership inference. Empty when the inference status is not whitelisted to expose sources.
   */
  "sources": Array<{ [key: string]: any }>;
  /**
   * The lifecycle status of an ownership inference.
   */
  "status": OwnershipInferenceStatus;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    checksum: {
      baseName: "checksum",
      type: "string",
      required: true,
    },
    confidence: {
      baseName: "confidence",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    evidenceVersions: {
      baseName: "evidence_versions",
      type: "Array<{ [key: string]: any; }>",
      required: true,
    },
    explanation: {
      baseName: "explanation",
      type: "string",
      required: true,
    },
    failedAt: {
      baseName: "failed_at",
      type: "Date",
      format: "date-time",
    },
    failureReason: {
      baseName: "failure_reason",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "number",
      required: true,
      format: "int64",
    },
    ownerType: {
      baseName: "owner_type",
      type: "OwnershipOwnerType",
      required: true,
    },
    primaryContactRef: {
      baseName: "primary_contact_ref",
      type: "string",
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
      required: true,
    },
    retrySchedule: {
      baseName: "retry_schedule",
      type: "Date",
      format: "date-time",
    },
    sources: {
      baseName: "sources",
      type: "Array<{ [key: string]: any; }>",
      required: true,
    },
    status: {
      baseName: "status",
      type: "OwnershipInferenceStatus",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OwnershipHistoryItem.attributeTypeMap;
  }

  public constructor() {}
}
