/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationMetadata } from "./CustomDestinationMetadata";
import { CustomDestinationWithId } from "./CustomDestinationWithId";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing information about a single custom destination.
 */
export class CustomDestinationResponse {
  /**
   * The custom destination object with an already assigned ID.
   */
  "data": CustomDestinationWithId;
  /**
   * The metadata relevant to your configuration or recent request.
   */
  "meta"?: CustomDestinationMetadata;

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
      type: "CustomDestinationWithId",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CustomDestinationMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationResponse.attributeTypeMap;
  }

  public constructor() {}
}
