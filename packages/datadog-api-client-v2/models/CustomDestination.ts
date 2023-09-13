/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationAttributes } from "./CustomDestinationAttributes";
import { CustomDestinationType } from "./CustomDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The custom destination object.
 */
export class CustomDestination {
  /**
   * The custom destination attributes.
   */
  "attributes": CustomDestinationAttributes;
  /**
   * The ID of the custom destination.
   */
  "id": string;
  /**
   * The custom destination type.
   */
  "type": CustomDestinationType;

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
      type: "CustomDestinationAttributes",
      required: true,
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestination.attributeTypeMap;
  }

  public constructor() {}
}
