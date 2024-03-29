/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationType } from "./CustomDestinationType";
import { CustomDestinationUpdateRequestAttributes } from "./CustomDestinationUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of a custom destination.
 */
export class CustomDestinationUpdateRequestDefinition {
  /**
   * The attributes associated with the custom destination.
   */
  "attributes"?: CustomDestinationUpdateRequestAttributes;
  /**
   * The custom destination ID.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `custom_destination`.
   */
  "type": CustomDestinationType;

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
      type: "CustomDestinationUpdateRequestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationUpdateRequestDefinition.attributeTypeMap;
  }

  public constructor() {}
}
