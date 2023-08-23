/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionMeta } from "./ServiceDefinitionMeta";
import { ServiceDefinitionSchema } from "./ServiceDefinitionSchema";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service definition attributes.
 */
export class ServiceDefinitionDataAttributes {
  /**
   * Metadata about a service definition.
   */
  "meta"?: ServiceDefinitionMeta;
  /**
   * Service definition schema.
   */
  "schema"?: ServiceDefinitionSchema;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    meta: {
      baseName: "meta",
      type: "ServiceDefinitionMeta",
    },
    schema: {
      baseName: "schema",
      type: "ServiceDefinitionSchema",
    },
  };
}
