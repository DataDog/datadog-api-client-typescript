/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventEmailAddressResponseDataAttributes } from "./EventEmailAddressResponseDataAttributes";
import { EventEmailAddressResponseDataRelationships } from "./EventEmailAddressResponseDataRelationships";
import { EventEmailsType } from "./EventEmailsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class EventEmailAddressResponseData {
  "attributes"?: EventEmailAddressResponseDataAttributes;
  "id": string;
  "relationships"?: EventEmailAddressResponseDataRelationships;
  /**
   * Event emails resource type.
   */
  "type": EventEmailsType;

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
      type: "EventEmailAddressResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "EventEmailAddressResponseDataRelationships",
    },
    type: {
      baseName: "type",
      type: "EventEmailsType",
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
    return EventEmailAddressResponseData.attributeTypeMap;
  }

  public constructor() {}
}
