/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TriggerInvestigationRequestDataAttributes } from "./TriggerInvestigationRequestDataAttributes";
import { TriggerInvestigationRequestType } from "./TriggerInvestigationRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for the trigger investigation request.
 */
export class TriggerInvestigationRequestData {
  /**
   * Attributes for the trigger investigation request.
   */
  "attributes": TriggerInvestigationRequestDataAttributes;
  /**
   * The resource type for trigger investigation requests.
   */
  "type": TriggerInvestigationRequestType;

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
    attributes: {
      baseName: "attributes",
      type: "TriggerInvestigationRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TriggerInvestigationRequestType",
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
    return TriggerInvestigationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
