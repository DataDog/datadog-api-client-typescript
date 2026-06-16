/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipInferenceStatus } from "./OwnershipInferenceStatus";
import { OwnershipOwnerType } from "./OwnershipOwnerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a single ownership inference.
 */
export class OwnershipInferenceAttributes {
  /**
   * A checksum that uniquely identifies the current state of the inference. Required when submitting feedback.
   */
  "checksum": string;
  /**
   * The confidence score of the inference, expressed as a numeric string with up to four decimal places.
   */
  "confidence": string;
  /**
   * The time when the inference was created.
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
   * The owner type for an ownership inference.
   */
  "ownerType": OwnershipOwnerType;
  /**
   * The primary contact reference for the inferred owner, formatted as `ref:handle/<owner_handle>`.
   */
  "primaryContactRef"?: string;
  /**
   * The list of sources backing an ownership inference. Empty when the inference status is not whitelisted to expose sources.
   */
  "sources": Array<{ [key: string]: any }>;
  /**
   * The lifecycle status of an ownership inference.
   */
  "status": OwnershipInferenceStatus;
  /**
   * The time when the inference was last updated.
   */
  "updatedAt": Date;

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
    ownerType: {
      baseName: "owner_type",
      type: "OwnershipOwnerType",
      required: true,
    },
    primaryContactRef: {
      baseName: "primary_contact_ref",
      type: "string",
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
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return OwnershipInferenceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
