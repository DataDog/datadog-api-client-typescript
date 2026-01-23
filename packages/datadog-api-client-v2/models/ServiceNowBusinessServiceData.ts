/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceNowBusinessServiceAttributes } from "./ServiceNowBusinessServiceAttributes";
import { ServiceNowBusinessServiceType } from "./ServiceNowBusinessServiceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a ServiceNow business service
 */
export class ServiceNowBusinessServiceData {
  /**
   * Attributes of a ServiceNow business service
   */
  "attributes": ServiceNowBusinessServiceAttributes;
  /**
   * Unique identifier for the ServiceNow business service
   */
  "id": string;
  /**
   * Type identifier for ServiceNow business service resources
   */
  "type": ServiceNowBusinessServiceType;

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
      type: "ServiceNowBusinessServiceAttributes",
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
      type: "ServiceNowBusinessServiceType",
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
    return ServiceNowBusinessServiceData.attributeTypeMap;
  }

  public constructor() {}
}
