/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeysType } from "./ApplicationKeysType";
import { ApplicationKeyUpdateAttributes } from "./ApplicationKeyUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object used to update an application key.
 */
export class ApplicationKeyUpdateData {
  /**
   * Attributes used to update an application Key.
   */
  "attributes": ApplicationKeyUpdateAttributes;
  /**
   * ID of the application key.
   */
  "id": string;
  /**
   * Application Keys resource type.
   */
  "type": ApplicationKeysType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "ApplicationKeyUpdateAttributes",
      required: true,
    },
    id: {
      type: "string",
      required: true,
    },
    type: {
      type: "ApplicationKeysType",
      required: true,
    },
  };
}
