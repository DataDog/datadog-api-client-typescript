/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyService } from "./FastlyService";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes object for creating a Fastly account.
 */
export class FastlyAccountCreateRequestAttributes {
  /**
   * The API key for the Fastly account.
   */
  "apiKey": string;
  /**
   * The name of the Fastly account.
   */
  "name": string;
  /**
   * A list of services belonging to the parent account.
   */
  "services"?: Array<FastlyService>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    services: {
      type: "Array<FastlyService>",
    },
  };
}
