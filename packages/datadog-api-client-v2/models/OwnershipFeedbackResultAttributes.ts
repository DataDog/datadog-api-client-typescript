/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipFeedbackAction } from "./OwnershipFeedbackAction";
import { OwnershipInferenceStatus } from "./OwnershipInferenceStatus";
import { OwnershipOwnerType } from "./OwnershipOwnerType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The attributes of an ownership feedback result.
*/
export class OwnershipFeedbackResultAttributes {
  /**
   * The feedback action to apply to an inference.
  */
  "action": OwnershipFeedbackAction;
  /**
   * The checksum of the inference after the feedback was applied.
  */
  "checksum": string;
  /**
   * The lifecycle status of an ownership inference.
  */
  "newStatus": OwnershipInferenceStatus;
  /**
   * The owner type for an ownership inference.
  */
  "ownerType": OwnershipOwnerType;
  /**
   * The lifecycle status of an ownership inference.
  */
  "previousStatus": OwnershipInferenceStatus;
  /**
   * The primary contact reference for the inferred owner after the feedback was applied, formatted as `ref:handle/<owner_handle>`.
  */
  "primaryContactRef"?: string;
  /**
   * The time when the inference was updated by the feedback.
  */
  "updatedAt": Date;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "action": {
      "baseName": "action",
      "type": "OwnershipFeedbackAction",
      "required": true,
    },
    "checksum": {
      "baseName": "checksum",
      "type": "string",
      "required": true,
    },
    "newStatus": {
      "baseName": "new_status",
      "type": "OwnershipInferenceStatus",
      "required": true,
    },
    "ownerType": {
      "baseName": "owner_type",
      "type": "OwnershipOwnerType",
      "required": true,
    },
    "previousStatus": {
      "baseName": "previous_status",
      "type": "OwnershipInferenceStatus",
      "required": true,
    },
    "primaryContactRef": {
      "baseName": "primary_contact_ref",
      "type": "string",
    },
    "updatedAt": {
      "baseName": "updated_at",
      "type": "Date",
      "required": true,
      "format": "date-time",
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




    return OwnershipFeedbackResultAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









