/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationWithoutId } from "./CustomDestinationWithoutId";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Payload containing information about a single custom destination to be created.
 */
export class CustomDestinationCreatePayload {
  /**
   * The custom destination object without an assigned ID.
   */
  "data": CustomDestinationWithoutId;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "CustomDestinationWithoutId",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationCreatePayload.attributeTypeMap;
  }

  public constructor() {}
}
