/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsLookupProcessorType } from "./LogsLookupProcessorType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Use the Lookup Processor to define a mapping between a log attribute and a human readable value saved in the processors mapping table. For example, you can use the Lookup Processor to map an internal service ID into a human readable service name. Alternatively, you could also use it to check if the MAC address that just attempted to connect to the production environment belongs to your list of stolen machines.
 */

export class LogsLookupProcessor {
  /**
   * Value to set the target attribute if the source value is not found in the list.
   */
  "defaultLookup"?: string;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Mapping table of values for the source attribute and their associated target attribute values, formatted as `[\"source_key1,target_value1\", \"source_key2,target_value2\"]`
   */
  "lookupTable": Array<string>;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Source attribute used to perform the lookup.
   */
  "source": string;
  /**
   * Name of the attribute that contains the corresponding value in the mapping list or the `default_lookup` if not found in the mapping list.
   */
  "target": string;
  "type": LogsLookupProcessorType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    defaultLookup: {
      baseName: "default_lookup",
      type: "string",
      format: "",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      format: "",
    },
    lookupTable: {
      baseName: "lookup_table",
      type: "Array<string>",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    source: {
      baseName: "source",
      type: "string",
      format: "",
    },
    target: {
      baseName: "target",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "LogsLookupProcessorType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsLookupProcessor.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsLookupProcessor {
    const res = new LogsLookupProcessor();

    res.defaultLookup = ObjectSerializer.deserialize(
      data.default_lookup,
      "string",
      ""
    );

    res.isEnabled = ObjectSerializer.deserialize(
      data.is_enabled,
      "boolean",
      ""
    );

    if (data.lookup_table === undefined) {
      throw new TypeError(
        "missing required attribute 'lookup_table' on 'LogsLookupProcessor' object"
      );
    }
    res.lookupTable = ObjectSerializer.deserialize(
      data.lookup_table,
      "Array<string>",
      ""
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.source === undefined) {
      throw new TypeError(
        "missing required attribute 'source' on 'LogsLookupProcessor' object"
      );
    }
    res.source = ObjectSerializer.deserialize(data.source, "string", "");

    if (data.target === undefined) {
      throw new TypeError(
        "missing required attribute 'target' on 'LogsLookupProcessor' object"
      );
    }
    res.target = ObjectSerializer.deserialize(data.target, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsLookupProcessor' object"
      );
    }
    if (["lookup-processor", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  static serialize(data: LogsLookupProcessor): { [key: string]: any } {
    const attributeTypes = LogsLookupProcessor.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.default_lookup = ObjectSerializer.serialize(
      data.defaultLookup,
      "string",
      ""
    );

    res.is_enabled = ObjectSerializer.serialize(data.isEnabled, "boolean", "");

    if (data.lookupTable === undefined) {
      throw new TypeError(
        "missing required attribute 'lookup_table' on 'LogsLookupProcessor' object"
      );
    }
    res.lookup_table = ObjectSerializer.serialize(
      data.lookupTable,
      "Array<string>",
      ""
    );

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.source === undefined) {
      throw new TypeError(
        "missing required attribute 'source' on 'LogsLookupProcessor' object"
      );
    }
    res.source = ObjectSerializer.serialize(data.source, "string", "");

    if (data.target === undefined) {
      throw new TypeError(
        "missing required attribute 'target' on 'LogsLookupProcessor' object"
      );
    }
    res.target = ObjectSerializer.serialize(data.target, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsLookupProcessor' object"
      );
    }
    if (["lookup-processor", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
