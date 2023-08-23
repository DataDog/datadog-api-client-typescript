/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV1ResourceType } from "./ServiceDefinitionV1ResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service's external links.
 */
export class ServiceDefinitionV1Resource {
  /**
   * Link name.
   */
  "name": string;
  /**
   * Link type.
   */
  "type": ServiceDefinitionV1ResourceType;
  /**
   * Link URL.
   */
  "url": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      type: "string",
      required: true,
    },
    type: {
      type: "ServiceDefinitionV1ResourceType",
      required: true,
    },
    url: {
      type: "string",
      required: true,
    },
  };
}
