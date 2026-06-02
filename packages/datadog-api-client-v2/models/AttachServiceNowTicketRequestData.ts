/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttachServiceNowTicketRequestDataAttributes } from "./AttachServiceNowTicketRequestDataAttributes";
import { AttachServiceNowTicketRequestDataRelationships } from "./AttachServiceNowTicketRequestDataRelationships";
import { ServiceNowTicketsDataType } from "./ServiceNowTicketsDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the ServiceNow ticket to attach security findings to.
 */
export class AttachServiceNowTicketRequestData {
  /**
   * Attributes of the ServiceNow ticket to attach security findings to.
   */
  "attributes": AttachServiceNowTicketRequestDataAttributes;
  /**
   * Relationships of the ServiceNow ticket to attach security findings to.
   */
  "relationships": AttachServiceNowTicketRequestDataRelationships;
  /**
   * ServiceNow tickets resource type.
   */
  "type": ServiceNowTicketsDataType;

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
      type: "AttachServiceNowTicketRequestDataAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "AttachServiceNowTicketRequestDataRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ServiceNowTicketsDataType",
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
    return AttachServiceNowTicketRequestData.attributeTypeMap;
  }

  public constructor() {}
}
