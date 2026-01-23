/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceNowTemplateAttributes } from "./ServiceNowTemplateAttributes";
import { ServiceNowTemplateType } from "./ServiceNowTemplateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a ServiceNow template
 */
export class ServiceNowTemplateData {
  /**
   * Attributes of a ServiceNow template
   */
  "attributes": ServiceNowTemplateAttributes;
  /**
   * Unique identifier for the ServiceNow template
   */
  "id": string;
  /**
   * Type identifier for ServiceNow template resources
   */
  "type": ServiceNowTemplateType;

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
      type: "ServiceNowTemplateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ServiceNowTemplateType",
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
    return ServiceNowTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
